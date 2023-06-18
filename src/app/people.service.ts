import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IPeople } from 'src/IPeople';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getData(): Observable<IPeople[]>
  {
    return this.http.get<IPeople[]>(this.url);
  }
}
