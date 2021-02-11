import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizacionModel } from '../models/organizacionModel';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private _http: HttpClient) {
    
  }

  getOrganizaciones() : Observable<OrganizacionModel[]> {
    return this._http.get<OrganizacionModel[]>(`${this.baseUrl}organizaciones/`);
  }

}
