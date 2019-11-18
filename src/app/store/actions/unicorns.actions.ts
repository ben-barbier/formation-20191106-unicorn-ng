import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const deleteUnicorn = createAction(
    '[Unicorns] deleteUnicorn',
    props<{ unicorn: Unicorn }>(),
);

export const fillUnicorns = createAction(
    '[unicorns] fillUnicorns',
    props<{ unicorns: Unicorn[] }>(),
);
