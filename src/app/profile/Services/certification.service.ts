import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private _urlGetCertification = 'http://localhost:8080/rest-api/users/get';
  private _urlAddCertification = 'http://localhost:8080/rest-api/users/addCertificate'
  private _urlUpdateCertification = 'http://localhost:8080/rest-api/users/changeCertificate/';
  private _urlremoveCertification = 'http://localhost:8080/rest-api/users/removeCertificate/';

  constructor(private http: HttpClient) { }

  public objString;

  getCertification(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetCertification);
  }

  updateCertification(name: string, issuedBy: string, year: string, id: string): Observable<any> {
    this.objString = '{"name":"'+ name+ '","issuedBy":"'+ issuedBy +'","year":"'+ year+'"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateCertification+id, JSON.parse(this.objString));
  }

  addCertification(certificationObj):Observable<any>{
    return this.http.put<any>(this._urlAddCertification,certificationObj);
  }

  removeCertification(id:string): Observable<any>{
    return this.http.put<any>(this._urlremoveCertification+id, {})
  }


}
