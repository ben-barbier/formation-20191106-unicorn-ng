import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'obs-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    public cartSize: number;

    constructor(private breakpointObserver: BreakpointObserver,
                private cartService: CartService) {
        cartService.cart$.subscribe(cart => this.cartSize = cart.length);
    }

    public clearCart(): void {
        this.cartService.clearCart();
    }

}
