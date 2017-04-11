import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public authStatus() {
        if (localStorage.getItem('currentUser')) {
            return true;
        } else {
            return false;
        }
    }

    public login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === '123') {
                const user = `${username}-${Date.now()}`;
                localStorage.setItem('currentUser', JSON.stringify(user));
                resolve();
            } else {
                reject();
            }
        });
    }

    public logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem('currentUser');
            resolve();
        });
    }
}
