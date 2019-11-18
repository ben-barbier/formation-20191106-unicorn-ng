import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornDetailComponent } from './pages/unicorn-detail/unicorn-detail.component';
import { HaveCapacitiesGuard } from './shared/guards/have-capacities.guard';

const routes: Routes = [
    {path: '', component: UnicornListComponent},
    {
        path: 'unicorns/:id',
        component: UnicornDetailComponent,
        canActivate: [HaveCapacitiesGuard],
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
