import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {LocationService} from '../services/location.service'

@Component({
    template: '<h2>Location</h2>'
})
export class LocationComponent implements OnInit {

    location:Location;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _locationService:LocationService) {

        _locationService.locations
            .subscribe(
                people => this.people = people,
                error => console.error('Error: ' + err),
                () => console.log('Completed!')
            );
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
    }

}