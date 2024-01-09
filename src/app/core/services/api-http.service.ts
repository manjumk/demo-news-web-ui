import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http:HttpClient) { }
  
  public get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  public getWithType<T>(url:string,options?:any):Observable<any>{
    return this.http.get<T>(url,options);
  }

}
