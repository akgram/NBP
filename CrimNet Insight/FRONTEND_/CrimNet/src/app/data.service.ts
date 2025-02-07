import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBaza(): Observable<any> {
    return this.http.get('/api/baza');
  }

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

  getTipovi(): Observable<any> {
    return this.http.get('/api/node-types');
  }

  getAttributesForType(type: string): Observable<any> {
    return this.http.get(`/api/node-types/attributes?type=${type}`);
  }

  addNodeToDatabase(nodeData: any): Observable<any> {
    return this.http.post('/api/add-node', nodeData);
  }

  deleteNodeFromDatabase(nodeId: any, type: string, title: string) {
    return this.http.delete(`/api/delete-node/${nodeId}/${type}/${title}`);
  }
  
}
