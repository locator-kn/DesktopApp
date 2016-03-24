import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    template: '<h2>Location</h2>'
})

export class UserComponent {

    location:Location;

    constructor(private _router:Router,
                private _routeParams:RouteParams) {

        let id = this._routeParams.get('id');
        console.info(id);

    }
}