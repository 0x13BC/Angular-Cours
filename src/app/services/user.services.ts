//https://angular.io/guide/http

import {User } from '../models/user.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient){

    }


getAll(): Observable<Array <User>>{


    console.log(`get http api:${environment.apiUser}/api/users`);

    return this.http.get(`${environment.apiUser}/api/users`) as Observable<Array<User>>;

    // const obs = this.http.get(`${environment.apiUser}/users`) as Observable<Array<User>>;
    // obs.subscribe(
    //     (data) => { console.log(data); },
    //     (err) => { console.warn(err); }
    // );


    // console.log('fin getAll()');
    // return null;

}


    save(user: User): boolean{
        console.log(`post http api:${environment.apiUser}/api/users`);
        

        return true;
    }
}