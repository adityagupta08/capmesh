import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  

  constructor(private http: HttpClient, private auth:AuthService) { }

  private _urlGetAwards = 'http://localhost:8080/rest-api/users/get/'+this.auth.getUser();
  private _urlAddAward = 'http://localhost:8080/rest-api/users/addAward'
  private _urlUpdateAward = 'http://localhost:8080/rest-api/users/changeAward/';
  private _urlremoveAward = 'http://localhost:8080/rest-api/users/removeAward/';

  public objString;

  getAwards(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetAwards);
  }

  updateAward(name: string, awardedBy: string, year: string, id: string): Observable<any> {
    this.objString = '{"userName":"'+ this.auth.getUser() +'","name":"' + name + '","awardedBy":"' + awardedBy + '","year":"' + year + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateAward + id, JSON.parse(this.objString));
  }

  addAward(awardObj): Observable<any> {
    return this.http.put<any>(this._urlAddAward, awardObj);
  }

  removeAward(id: string): Observable<any> {
    return this.http.put<any>(this._urlremoveAward + id, JSON.parse('{"userName":"'+this.auth.getUser()+'"}'))
  }

}
