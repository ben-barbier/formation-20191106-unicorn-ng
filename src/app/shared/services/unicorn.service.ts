import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { filter, flatMap, map, mergeMap, pluck, toArray } from 'rxjs/operators';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornService {

    constructor(private http: HttpClient,
                private capacityService: CapacitiesService) {
    }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            mergeMap(unicorn =>
                from(unicorn.capacities).pipe(
                    mergeMap(capacityId => this.capacityService.get(capacityId)),
                    pluck('label'),
                    toArray(),
                    map(capacityLabels => ({...unicorn, capacityLabels}))
                )
            ),
            toArray(),
        );
    }

    public list(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://0.0.0.0:3000/unicorns');
    }

    public getMoreTenYears(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            filter(unicorn => unicorn.birthyear < new Date().getFullYear() - 10),
            map(unicorn => ({...unicorn, name: unicorn.name.toUpperCase()})),
            toArray(),
        );
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`http://0.0.0.0:3000/unicorns/${unicorn.id}`);
    }

    public get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://0.0.0.0:3000/unicorns/${id}`);
    }
}
