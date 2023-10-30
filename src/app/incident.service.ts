import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Incident} from "./incident";

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private httpClient:HttpClient
  ) { }

  incidentUrl: string = "/api/incidents";

  getIncidents(): Observable<Incident[]>{
    return this.httpClient.get<Incident[]>(this.incidentUrl);
  }
    getIncidentById(id:number): Observable<Incident>{
        let res = this.httpClient.get<Incident>(this.incidentUrl + "/" + id);
        console.log(res)
        return res
    }
}
