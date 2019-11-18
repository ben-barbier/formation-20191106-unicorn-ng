import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const addToCart = createAction(
    '[Cart] addToCart',
    props<{ unicorn: Unicorn }>(),
);

export const removeFromCart = createAction(
    '[Cart] removeFromCart',
    props<{ unicorn: Unicorn }>(),
);

export const clearCart = createAction(
    '[Cart] clearCart',
);
