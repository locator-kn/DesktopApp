import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LocationService} from '../../service/location.service';

@Component({
    templateUrl: './app/comp/locationList/template.html',
    styleUrls: ['./app/comp/locationList/style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LocationList {

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