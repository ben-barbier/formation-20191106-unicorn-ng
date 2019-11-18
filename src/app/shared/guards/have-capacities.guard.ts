import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UnicornService } from '../services/unicorn.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HaveCapacitiesGuard implements CanActivate {

    constructor(private unicornService: UnicornService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<true | UrlTree> {

        return this.unicornService.get(next.params.id).pipe(
            map(unicorn => !!unicorn.capacities.length || this.router.createUrlTree(['/'])),
        );

    }
}
