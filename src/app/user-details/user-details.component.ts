import {Component, OnInit} from '@angular/core';
import {IncidentService} from "../incident.service";
import {Incident} from "../incident";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {UserService} from "../user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

    constructor(
        private incidentService: IncidentService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {}

    user: User = {
        id: 100,
        username: 'username',
        firstname: "firstname",
        lastname: "lastname",
        email: "email@email.com",
        userRole: "User",
        password: "",
        assignedIncidents: [],
        createdUpdates: []
    }
    id: number = 1;

    userForm: FormGroup = this.formBuilder.group(
        {
        id: ['', Validators.required],
        username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
        firstname: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
        lastname: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
        email: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        userRole: ['', Validators.required],
        password: ['', Validators.required],
        assignedIncidents: [],
        createdUpdates: []
        }
    )

    incidents: Incident[] = []

    ngOnInit() {
/*        this.incidentService.getIncidents().subscribe((response) =>{
            this.incidents = response;
        })*/

        if(this.router.url != '/new-user') {
        let id = Number(this.activeRoute.snapshot.paramMap.get('id'));
        this.userService.getUserById(id).subscribe((response) => {
            this.user = response;
            this.userForm.setValue(
                {
                    id: this.user.id,
                    username: this.user.username,
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    email: this.user.email,
                    userRole: this.user.userRole,
                    password: '',
                    assignedIncidents: [],
                    createdUpdates: []
                }
            )
            this.userForm.disable();
        })
        }
        this.userService.getUsers().subscribe((response) => {

            this.id = response.length;
        })
    }

    saveUser():void {
        this.user.id = this.userForm.get('id')?.value;
        this.user.username = this.userForm.get('username')?.value;
        this.user.firstname = this.userForm.get('firstname')?.value;
        this.user.lastname = this.userForm.get('lastname')?.value;
        this.user.email = this.userForm.get('email')?.value;
        this.user.userRole = this.userForm.get('userRole')?.value;
        this.user.password = this.userForm.get('password')?.value;
        this.user.assignedIncidents = this.userForm.get('assignedIncidents')?.value;
        this.user.createdUpdates = this.userForm.get('createdUpdates')?.value;

        this.userService.createUser(this.user).subscribe();
        this.router.navigate(['users']);
    }

    deleteUser():void{}

    editUser(): void {
        this.userForm.enable();
        console.log(this.id);
    }

}
