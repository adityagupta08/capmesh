import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  private _urlGetAwards = 'http://localhost:8080/rest-api/users/get';
  private _urlAddAward = 'http://localhost:8080/rest-api/users/addAward'
  private _urlUpdateAward = 'http://localhost:8080/rest-api/users/changeAward/';
  private _urlremoveAward = 'http://localhost:8080/rest-api/users/removeAward/';

  constructor(private http: HttpClient) { }

  public objString;

  getAwards(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetAwards);
  }

  updateAward(name: string, awardedBy: string, year: string, id: string): Observable<any> {
    this.objString = '{"name":"' + name + '","awardedBy":"' + awardedBy + '","year":"' + year + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateAward + id, JSON.parse(this.objString));
  }

  addAward(awardObj): Observable<any> {
    return this.http.put<any>(this._urlAddAward, awardObj);
  }

  removeAward(id: string): Observable<any> {
    return this.http.put<any>(this._urlremoveAward + id, {})
  }

}
