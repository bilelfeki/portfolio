import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api="http://localhost:3000/contact"
  /**
   * @returns Observable<HttpResponse<Experience>>
   * @param http HttpClient 
   * response headers are accessible because of this
   * option : HttpResponse<Experience>
   */
  constructor(private http:HttpClient) { }
  getContact():Observable<Contact>{
    return this.http.get<Contact>(this.api)
  }
}
