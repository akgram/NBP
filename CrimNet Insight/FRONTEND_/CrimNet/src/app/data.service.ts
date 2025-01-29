import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAkteri(): Observable<any> {
    return this.http.get('/api/akteri');
  }

  getVozila(): Observable<any> {
    return this.http.get('/api/vozila');
  }

  getIncidenti(): Observable<any> {
    return this.http.get('/api/incidenti');
  }

  getLokacije(): Observable<any> {
    return this.http.get('/api/lokacije');
  }

  getAddEl(elementData: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/elements', elementData);
  }
  
}
