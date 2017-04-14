import { StateService } from 'ui-router-ng2';
import { Transition } from 'ui-router-ng2';
import { AuthService } from '../../../helpers/auth/services/auth.service';

/**
 * Auth Guard
 * Object is used to lock states when user is not authorized
 */
export let AuthGuard: any = {
    token: 'auth',
    deps: [Transition, StateService, AuthService],
    resolveFn: (trans, stateService, authService) => {
        return new Promise((resolve, reject) => {
            if (authService.authStatus()) {
                resolve('Authorized');
            } else {
                reject('Unauthorized');
            }
        });
    }
};
