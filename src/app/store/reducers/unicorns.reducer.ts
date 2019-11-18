import { Unicorn } from '../../shared/models/unicorn.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as UnicornsActions from '../actions/unicorns.actions';

export const initialState: Unicorn[] = [];

export const unicornReducer = createReducer(
    initialState,
    on(UnicornsActions.deleteUnicorn, (state, action) => state.filter(u => u.id !== action.unicorn.id)),
    on(UnicornsActions.fillUnicorns, (state, action) => action.unicorns),
);

export function reducer(state: Unicorn[] | undefined, action: Action) {
    return unicornReducer(state, action);
}
