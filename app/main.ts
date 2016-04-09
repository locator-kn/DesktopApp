/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {AppComponent} from './app.component';
import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LocationService} from './service/location.service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy,
        {useClass: HashLocationStrategy}), LocationService
]);