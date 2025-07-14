import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getMongo(id: any, type: any): Observable<any> {
    return this.http.get(`/api/mongo/${id}/${type}`);
  }

  saveMongo(formData: any) : Observable<any> {
    return this.http.post('/api/mongoSave', formData);

  }

  editMongo(formData: any) : Observable<any> {
    return this.http.put('/api/mongoEdit', formData);

  }

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

  editNodeToDatabase(nodeData: any, id: any): Observable<any> {
    return this.http.post(`/api/edit-node/${id}`, nodeData);
  }

  loadNodeDataFromDatabase(id: any, type: string, title: string): Observable<any> {
    return this.http.get(`/api/loadData-node?id=${id}&type=${type}&title=${title}`);
  }

  addEdgeToDatabase(from: any, to: any, edgeName: any, type1: any, type2: any, baza: any): Observable<any> {
    const body = {edgeName, type1, type2, baza}
    return this.http.post(`/api/add-edge/${from}/${to}`, body);
  }

  deleteEdgeFromDatabase(sourceNodeId:any, sourceNodeType:any, targetNodeId: any, targetNodeType: any, title: string) {
    return this.http.delete(`/api/delete-edge/${sourceNodeId}/${sourceNodeType}/${targetNodeId}/${targetNodeType}/${title}`);
  }

  editEdgeToDatabase(name: any, sourceNodeId: any, sourceNodeType: any, targetNodeId: any, targetNodeType: any, from: any, to: any, type1: any, type2: any, baza: any): Observable<any> {
    const body = {type1, type2, baza}
    return this.http.post(`/api/edit-edge/${name}/${sourceNodeId}/${sourceNodeType}/${targetNodeId}/${targetNodeType}/${from}/${to}`, body);
  }
  
}
