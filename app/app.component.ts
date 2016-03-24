import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LocationComponent} from './LocationComponent/location.component';
import {UserComponent} from './UserComponent/user.component';

import {LocationService} from './services/location.service';

@Component({
    selector: 'dash',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/location/:id', name: 'Location', component: LocationComponent},
    {path: '/user/:id', name: 'User', component: UserComponent},
])

export class AppComponent {
}