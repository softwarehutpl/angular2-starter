import { StateService } from 'ui-router-ng2';
import { Transition } from 'ui-router-ng2';
import { AuthService } from '../../../helpers/auth/services/auth.service';

/**
 * Auth Guard
 * Object is used to lock states when user is not authorized
 */
export let AuthGuard: any = {
  login: {
    token: 'auth',
    deps: [Transition, StateService, AuthService],
    resolveFn: (trans, stateService, authService) => {
        return new Promise((resolve, reject) => {
            if (authService.authStatus()) {
                resolve('authorized');
            } else {
                reject('unauthorized');
            }
        });
    }
  },
  home: {
    token: 'authhome',
    deps: [Transition, StateService, AuthService],
    resolveFn: (trans, stateService, authService) => {
        return new Promise((resolve, reject) => {
            if (authService.authStatus()) {
                resolve('authorized');
            } else {
                reject('unauthorized_home');
            }
        });
    }
  },

};
