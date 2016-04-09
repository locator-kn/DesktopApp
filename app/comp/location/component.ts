import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {LocationService} from '../../service/location.service';

@Component({
    templateUrl: './app/comp/location/template.html',
    styleUrls: ['./app/comp/location/style.css'],
    providers: [LocationService]
})

export class Location {

    location;
    img;

    constructor(private _routeParams:RouteParams,
                private locationService:LocationService) {

        let id = this._routeParams.get('id');
        console.info(id);

        locationService.getLocation(id).subscribe(
            data => {
                this.location = data;
                this.img = this.location.images.xlarge;
                console.info(this.location);
            },
            err => console.error(err)
        );

    }

}