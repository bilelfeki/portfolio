import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Experience } from '../interfaces/experience';
@Injectable({
  providedIn: 'root'
})
export class ExperienceServiceService {
  private api="http://localhost:3000/experiences"
  /**
   * @returns Observable<HttpResponse<Experience>>
   * @param http HttpClient 
   * response headers are accessible because of this 
   * option : HttpResponse<Experience>
   */
  constructor(private http:HttpClient) { }
  getExperience():Observable<HttpResponse<Experience>>{
    return this.http.get<HttpResponse<Experience>>(this.api)
  }
}
