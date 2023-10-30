import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {IncidentService} from "../incident.service";
import {Incident} from "../incident";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit{

    constructor(
        private router: Router,
        private incidentService: IncidentService
    ) {
    }

    incidents: Incident[] = []

    ngOnInit() {
        this.incidentService.getIncidents().subscribe((response) => {
            this.incidents = response;
        })
    }

    @Output() emitter = new EventEmitter<number>();

    openDetails(id: number) {
        this.emitter.emit(id);
    }
}
