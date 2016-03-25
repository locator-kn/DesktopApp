import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LocationService} from '../services/location.service';

@Component({
    templateUrl: './app/LocationsComponent/template.html',
    styleUrls: ['./app/LocationsComponent/style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LocationsComponent {

    locations;

    constructor(private locationService:LocationService) {

        locationService.getLocations().subscribe(
            data => {
                this.locations = data;
                console.info(this.locations);
            },
            err => console.error(err)
        );

    }

}