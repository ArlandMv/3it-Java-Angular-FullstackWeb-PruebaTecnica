import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:3000/persons';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  create(person: Person): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, person);
  }

  update(id: number, person: Person): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/${id}`, person);//(this.baseUrl+person.id, person)
  }

  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }
}
