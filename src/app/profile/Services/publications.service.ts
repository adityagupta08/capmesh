import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private _urlGetPublication = 'http://localhost:8080/rest/api/users/get';
  private _urlAddPublication = 'http://localhost:8080/rest/api/users/addPublication'
  private _urlUpdatePublication = 'http://localhost:8080/rest/api/users/changePublication/';
  private _urlremovePublication = 'http://localhost:8080/rest/api/users/removePublication/';


  constructor(private http: HttpClient) { }

  public objString;

  getPublication(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetPublication);
  }

  updatePublication(name: string, topic: string, publishedBy: string, year: string, id: string): Observable<any> {
    this.objString = '{"name":"' + name + '","topic":"' + topic + '","publishedBy":"' + publishedBy + '","year":"' + year + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdatePublication + id, JSON.parse(this.objString));
  }

  addPublication(publicationObj): Observable<any> {
    return this.http.put<any>(this._urlAddPublication, publicationObj);
  }

  removePublication(id: string): Observable<any> {
    return this.http.put<any>(this._urlremovePublication + id, {})
  }
}
