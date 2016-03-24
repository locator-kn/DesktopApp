import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class LocationService {

    constructor(http:Http) {
        this.locations = http.get("http://locator.in.htwg-konstanz.de:2020/locations/nearby?long=9.169753789901733&lat=47.66868204997508&maxDistance=100000000000&limit=1000000000")
            .map(response => response.json());
    }
}

