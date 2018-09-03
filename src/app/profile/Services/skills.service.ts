import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _urlGetSkills = 'http://localhost:8080/rest-api/users/get';
  private _urlAddSkills = 'http://localhost:8080/rest-api/users/addSkill/'
  private _urlremoveSkills = 'http://localhost:8080/rest-api/users/deleteSkill/';


  constructor(private http: HttpClient) { }

  public objString;

  getSkills(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetSkills);
  }

  addSkills(skillObj:string): Observable<any> {
    return this.http.put<any>(this._urlAddSkills + skillObj, {});
  }

  removeSkills(skill: string): Observable<any> {
    return this.http.put<any>(this._urlremoveSkills + skill, {})
  }

}
