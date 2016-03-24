import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class LocationService {

    getLocations() {
        http.get("http://locator.in.htwg-konstanz.de:2020/locations/nearby?long=9.169753789901733&lat=47.66868204997508&maxDistance=100000000000&limit=1000000000")
            .map(res => res.json())
    }

}