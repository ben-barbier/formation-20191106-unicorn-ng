import { Unicorn } from '../shared/models/unicorn.model';

export interface AppState {
    unicorns: Unicorn[];
    cart: Unicorn[];
}
