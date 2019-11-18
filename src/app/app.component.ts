import { Component } from '@angular/core';
import { from, of, throwError } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';

@Component({
    selector: 'obs-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
