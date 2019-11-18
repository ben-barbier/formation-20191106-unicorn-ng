import { ChangeDetectorRef, Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornService } from '../../shared/services/unicorn.service';

@Component({
    selector: 'obs-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {

    public unicorns: Unicorn[];

    constructor(unicornService: UnicornService,
                cd: ChangeDetectorRef) {
        unicornService.getAllWithCapacitiesLabels().subscribe(unicorns => {
            this.unicorns = unicorns;
            cd.markForCheck();
            cd.detectChanges();
        });
    }

    public removeUnicornFromList(unicorn: Unicorn) {
        this.unicorns = this.unicorns.filter(u => u.id !== unicorn.id);
    }

}
