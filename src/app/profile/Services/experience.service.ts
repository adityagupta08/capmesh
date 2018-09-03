import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private _urlGetExperience = 'http://localhost:8080/rest-api/users/get';
  private _urlAddExperience = 'http://localhost:8080/rest-api/users/addExperience'
  private _urlUpdateExperience = 'http://localhost:8080/rest-api/users/updateExperience/';
  private _urlremoveExperience = 'http://localhost:8080/rest-api/users/removeExperience/';
  constructor(private http: HttpClient) { }

  public objString;

  getExperience(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetExperience);
  }

  updateExperienceDatabase(designation: string, companyName: string, timePeriod: string, id: string): Observable<any> {
    this.objString = '{"designation":"'+ designation+ '","companyName":"'+ companyName +'","timePeriod":"'+ timePeriod+'"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateExperience+id, JSON.parse(this.objString));
  }

  addExperience(experienceObj):Observable<User[]>{
    return this.http.put<User[]>(this._urlAddExperience,experienceObj);
  }

  removeExperience(id:string): Observable<any>{
    return this.http.put<any>(this._urlremoveExperience+id, {})
  }


}
