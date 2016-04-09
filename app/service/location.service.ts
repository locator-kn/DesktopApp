import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class LocationService {

    http;

    constructor(http:Http) {
        this.http = http;
    }

    getLocations() {
        return this.http.get('https://locator-app.com/api/v2/locations/nearby?long=9.169753789901733&lat=47.66868204997508&maxDistance=10000&limit=100000')
            .map(res => res.json())
    }

    getLocation(id) {
        return this.http.get('https://locator-app.com/api/v2/locations/' + id)
            .map(res => res.json())
    }
}
