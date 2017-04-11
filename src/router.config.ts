import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';





@Injectable()
export class AppUIRouterConfig {
    constructor(uiRouter: UIRouter) {
        // Show the ui-router visualizer
        let vis = window['ui-router-visualizer'];
        vis.visualizer(uiRouter);
    }
}