import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { UnicornService } from '../../../shared/services/unicorn.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
    selector: 'obs-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    private removed = new EventEmitter();

    public isInCart = false;

    constructor(private unicornService: UnicornService,
                private cartService: CartService) {
    }

    public ngOnInit(): void {
        this.cartService.cart$.subscribe(() => {
            this.isInCart = this.cartService.containsUnicorn(this.unicorn);
        });
    }

    public deleteUnicorn(): void {
        this.unicornService.delete(this.unicorn).subscribe(() => {
            this.removed.emit();
        });
    }

    public toggleUnicorn(): void {
        if (this.cartService.containsUnicorn(this.unicorn)) {
            this.cartService.removeUnicornFromCart(this.unicorn);
        } else {
            this.cartService.addUnicornToCart(this.unicorn);
        }
    }

}
