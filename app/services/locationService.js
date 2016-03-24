System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocationService;
    return {
        setters:[],
        execute: function() {
            LocationService = (function () {
                function LocationService() {
                }
                LocationService.prototype.getLocations = function () {
                    http.get("http://locator.in.htwg-konstanz.de:2020/locations/nearby?long=9.169753789901733&lat=47.66868204997508&maxDistance=100000000000&limit=1000000000")
                        .map(function (res) { return res.json(); });
                };
                return LocationService;
            }());
            exports_1("LocationService", LocationService);
        }
    }
});
//# sourceMappingURL=locationService.js.map