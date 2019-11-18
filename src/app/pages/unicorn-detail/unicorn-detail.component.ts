import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnicornService } from '../../shared/services/unicorn.service';
import { Unicorn } from '../../shared/models/unicorn.model';
import { Observable } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';

@Component({
    selector: 'obs-unicorn-detail',
    templateUrl: './unicorn-detail.component.html',
    styleUrls: ['./unicorn-detail.component.scss']
})
export class UnicornDetailComponent {

    public unicorn$: Observable<Unicorn>;

    constructor(route: ActivatedRoute,
                unicornService: UnicornService) {

        this.unicorn$ = route.params.pipe(
            switchMap(params => unicornService.get(params.id)),
            share(),
        );

    }

}
