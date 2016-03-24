import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {LocationService} from '../services/location.service';

@Component({
    templateUrl: './app/locationComponent/template.html'
})

export class LocationComponent {

    locations:Locations;

    constructor(private _router:Router, private _routeParams:RouteParams, private locationService:LocationService) {

        let id = this._routeParams.get('id');
        console.info(id);
        console.info("jojo");

        locationService.getLocations().subscribe(
            data => {
                this.locations = data;
                console.info(this.locations);
            },
            err => console.err(err)
        );
    }

}