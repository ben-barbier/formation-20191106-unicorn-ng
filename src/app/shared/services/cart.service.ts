import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as CartActions from '../../store/actions/cart.actions';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart$ = this.store.select('cart');

    constructor(private store: Store<AppState>) {
    }

    public addUnicornToCart(unicorn: Unicorn): void {
        this.store.dispatch(CartActions.addToCart({unicorn}));
    }

    public containsUnicorn(unicorn: Unicorn): boolean {
        return this.cart$.getValue().some(u => u.id === unicorn.id);
    }

    public removeUnicornFromCart(unicorn: Unicorn): void {
        this.store.dispatch(CartActions.removeFromCart({unicorn}));
    }

    public clearCart(): void {
        this.store.dispatch(CartActions.clearCart());
    }
}
