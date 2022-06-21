import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private api="http://localhost:3000/profile"
  /**
   * @returns Observable<HttpResponse<Experience>>
   * @param http HttpClient 
   * response headers are accessible because of this
   * option : HttpResponse<Experience>
   */
  constructor(private http:HttpClient) { }
  /**
   *  get the profile from the server 
   * @returns observable<profile>
   */
  getProfile():Observable<Profile>{
    return this.http.get<Profile>(this.api)
  }
  
}
