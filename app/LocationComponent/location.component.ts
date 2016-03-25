import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {LocationService} from '../services/location.service';

@Component({
    templateUrl: './app/locationComponent/template.html',
    styleUrls: ['./app/locationComponent/style.css']
})

export class LocationComponent {

    locations;

    constructor(private _router:Router, private _routeParams:RouteParams, private locationService:LocationService) {

        let id = this._routeParams.get('id');
        console.info(id);
        console.info("jojo");

        locationService.getLocations().subscribe(
            data => {
                this.locations = data;
                console.info(this.locations);
            },
            err => console.error(err)
        );

    }

}