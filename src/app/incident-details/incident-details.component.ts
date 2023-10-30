import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Incident} from "../incident";
import {IncidentService} from "../incident.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit, OnChanges{

    incident: Incident = {
        id: 1,
        title: "Incident title",
        shortDescription: "Describe the incident in detail",
        reportDate: new Date(),
        assignedUser: "User",
        category: "Maleware",
        severity: "High",
        updates: [],
        isSolved: false
    }
    constructor(
        private incidentService: IncidentService,
        private formBuilder: FormBuilder
    ) {
    }
    @Input() id:number;
    testid: number = 1;

    incidentForm: FormGroup = this.formBuilder.group(
        {
        id: ['', Validators.required],
        title: ['', Validators.required],
        shortDescription: ['', Validators.required],
        reportDate: ['', Validators.required],
        assignedUser: ['', Validators.required],
        category: ['', Validators.required],
        severity: ['', Validators.required],
        updates: ['', Validators.required],
        isSolved: ['', Validators.required]
        }
    )

    ngOnInit() {
        this.getIncident(this.testid)
    }

    ngOnChanges(changes: SimpleChanges) {
        this.getIncident(this.id)
    }

    getIncident(id:number) {
        this.incidentService.getIncidentById(id).subscribe((response) => {
            this.incident = response;
            this.incidentForm.setValue(
                {
                    id: this.incident.id,
                    title: this.incident.title,
                    shortDescription: this.incident.shortDescription,
                    reportDate: this.incident.reportDate,
                    assignedUser: this.incident.assignedUser,
                    category: this.incident.category,
                    severity: this.incident.severity,
                    updates: [],
                    isSolved: false
                }
            )
            this.incidentForm.disable();
        })
    }
}
