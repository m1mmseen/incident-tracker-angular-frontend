import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(
      private httpClient: HttpClient
    ) { }

    userUrl: string = '/api/users'

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.userUrl);
    }

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(this.userUrl + "/" + id)
    }
    deleteUser(id: number): Observable<User> {
        return this.httpClient.delete<User>(this.userUrl + "/" + id)
    }
    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.userUrl, user)
    }

}
