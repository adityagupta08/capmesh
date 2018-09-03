import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class BioImageService {

   private _urlGetProfile = 'http://localhost:8080/rest-api/users/get';
   private _urlUpdateName = 'http://localhost:8080/rest-api/users/updateName';
   private _urlUpdateBio = 'http://localhost:8080/rest-api/users/updateBio';
   private _urlUpdateEmail = 'http://localhost:8080/rest-api/users/updateEmail';
   private _urlUpdateMobile = 'http://localhost:8080/rest-api/users/updateMobile';
  constructor(private http:HttpClient) { }

    public objString;

  getBio(): Observable<User[]>{
    return this.http.get<User[]>(this._urlGetProfile);
  }

  updateName(name: string): Observable<any> {
    this.objString = '{"name":"' + name + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateName, JSON.parse(this.objString));
  }

  updateBio(bio: string): Observable<any> {
    this.objString = '{"bio":"' + bio + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateBio, JSON.parse(this.objString));
  }

  updateEmail(email: string): Observable<any> {
    this.objString = '{"email":"' + email + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateEmail, JSON.parse(this.objString));
  }

  updateMobile(mobile: string): Observable<any> {
    this.objString = '{"mobile":"' + mobile + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateMobile, JSON.parse(this.objString));
  }

}
