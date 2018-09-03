import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class EndorsementService {
  private _urlGetEndorsement = 'http://localhost:8080/rest-api/users/get';
  private _urlAddEndorsement = 'http://localhost:8080/rest-api/users/addEndorsement/dip95'

  constructor(private http: HttpClient) { }
  public objString;

  getEndorsement(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetEndorsement);
  }

  addEndorsement(endorseObj):Observable<User[]>{
    return this.http.put<User[]>(this._urlAddEndorsement,endorseObj);
  }

}

