import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../../auth.service';
@Injectable({
  providedIn: 'root'
})
export class EndorsementService {
  

  constructor(private http: HttpClient, private auth:AuthService) { }

  private _urlGetEndorsement = 'http://localhost:8080/rest-api/users/get/'+this.auth.getUser();
  private _urlAddEndorsement = 'http://localhost:8080/rest-api/users/addEndorsement/dip95'
  public objString;

  getEndorsement(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetEndorsement);
  }

  addEndorsement(endorseObj):Observable<User[]>{
    return this.http.put<User[]>(this._urlAddEndorsement,endorseObj);
  }

}

