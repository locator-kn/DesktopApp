import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LocationDetailComponent}  from './LocationDetailComponent/locationdetail.component';
import {LocationsComponent}  from './LocationsComponent/locations.component';
import {UserComponent}      from './UserComponent/user.component';
import {LocationService} from './services/location.service';

@Component({
    selector: 'dash',
    template: '<router-outlet></router-outlet>',
    providers: [LocationService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Locations', component: LocationsComponent},
    {path: '/location/:id', name: 'Location', component: LocationDetailComponent},
    {path: '/user/:id', name: 'User', component: UserComponent},
])

export class AppComponent {
}