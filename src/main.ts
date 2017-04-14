import 'bootstrap/scss/bootstrap.scss';
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'expose?$!expose?jQuery!jquery';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
