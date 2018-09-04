import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
 


  constructor(private http: HttpClient, private auth:AuthService) { }

  private _urlGetPublication = 'http://10.102.55.85:8080/rest-api/users/get/'+this.auth.getUser();
  private _urlAddPublication = 'http://10.102.55.85:8080/rest-api/users/addPublication'
  private _urlUpdatePublication = 'http://10.102.55.85:8080/rest-api/users/changePublication/';
  private _urlremovePublication = 'http://10.102.55.85:8080/rest-api/users/removePublication/';

  public objString;

  getPublication(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetPublication);
  }

  updatePublication(name: string, topic: string, publishedBy: string, year: string, id: string): Observable<any> {
    this.objString = '{"userName":"'+ this.auth.getUser() +'","name":"' + name + '","topic":"' + topic + '","publishedBy":"' + publishedBy + '","year":"' + year + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdatePublication + id, JSON.parse(this.objString));
  }

  addPublication(publicationObj): Observable<any> {
    return this.http.put<any>(this._urlAddPublication, publicationObj);
  }

  removePublication(id: string): Observable<any> {
    return this.http.put<any>(this._urlremovePublication + id, JSON.parse('{"userName":"'+this.auth.getUser()+'"}'))
  }
}
