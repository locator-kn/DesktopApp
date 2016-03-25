import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {LocationService} from '../services/location.service';

@Component({
    templateUrl: './app/LocationDetailComponent/template.html',
    styleUrls: ['./app/LocationDetailComponent/style.css']
})

export class LocationDetailComponent {

    location;

    constructor(private _routeParams:RouteParams,
                private locationService:LocationService) {

        let id = this._routeParams.get('id');
        console.info(id);

        locationService.getLocation("56e82be612daae1a4fdc2cb4").subscribe(
            data => {
                this.location = data;
                console.info(this.location);
            },
            err => console.error(err)
        );

    }

}