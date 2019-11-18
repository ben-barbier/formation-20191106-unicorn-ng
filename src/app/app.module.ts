import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule, MatIconModule } from '@angular/material';
import { NavComponent } from './shared/components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UnicornDetailComponent } from './pages/unicorn-detail/unicorn-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import * as fromUnicorns from './store/reducers/unicorns.reducer';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent,
        UnicornDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatBadgeModule,
        StoreModule.forRoot({
            cart: fromCart.reducer,
            unicorns: fromUnicorns.reducer,
        }, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
