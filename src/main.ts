import 'bootstrap/scss/bootstrap.scss';
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'expose?$!expose?jQuery!jquery';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

/**
 * creates a browser platform for dynamic (JIT) compilation and bootstraps the AppModule
 * The bootstrapping process sets up the execution environment,
 * digs the root AppComponent out of the module's bootstrap array,
 * creates an instance of the component and inserts it within
 * the element tag identified by the component's selector
 */
platformBrowserDynamic().bootstrapModule(AppModule);
