import {App} from './app';
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {RouterProviders, HashLocationStrategy, LocationStrategy} from 'angular2/router';


import {reflector} from 'angular2/src/core/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/core/reflection/reflection_capabilities';

bootstrap(App, [
ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
