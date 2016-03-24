import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class LocationService {

    constructor(http:Http) {
        this.http = http;
    }

    getLocations() {
        return this.http.get('./mock.json')
            .map(res => res.json())
    }
}
