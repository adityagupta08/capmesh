import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  constructor(private http: HttpClient, private auth:AuthService) { }

  private _urlGetSkills = 'http://10.102.55.85:8080/rest-api/users/get/'+this.auth.getUser();
  private _urlAddSkills = 'http://10.102.55.85:8080/rest-api/users/addSkill/'
  private _urlremoveSkills = 'http://10.102.55.85:8080/rest-api/users/deleteSkill/';

  public objString;

  getSkills(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetSkills);
  }

  addSkills(skillObj:string): Observable<any> {
    return this.http.put<any>(this._urlAddSkills + skillObj, JSON.parse('{"userName":"'+this.auth.getUser()+'"}'));
  }

  removeSkills(skill: string): Observable<any> {
    return this.http.put<any>(this._urlremoveSkills + skill, JSON.parse('{"userName":"'+this.auth.getUser()+'"}'))
  }

}
