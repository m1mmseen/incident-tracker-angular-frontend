import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Incident} from "./incident";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb()  {
    const incidents: Incident[]  = [
      {
        id: 1,
        title: "Maleware loaded",
        shortDescription: "After installing xyz there is a popup which shows ads. I'm unlikely to remove this popup",
        reportDate: new Date('2023/10/10'),
        assignedUser: "Rüdiger",
        category: "Maleware",
        severity: "High",
        updates: [],
        isSolved: false,
      },      {
        id: 2,
        title: "Email from Peru",
        shortDescription: "I received an email from peru which informs me that my bank account was spied on",
        reportDate: new Date('2023/10/26'),
        assignedUser: "Ludwig",
        category: "Phishing",
        severity: "Low",
        updates: [],
        isSolved: false,
      },      {
        id: 3,
        title: "PC crashes when opening program xyz",
        shortDescription: "As soon as I try to open the application, my PC crashes and restarts immediately",
        reportDate: new Date('2023/10/16'),
        assignedUser: "Sybille",
        category: "Unauthorised Access",
        severity: "Critical",
        updates: [],
        isSolved: false,
      },{
        id: 4,
        title: "Maleware loaded",
        shortDescription: "After installing xyz there is a popup which shows ads. I'm unlikely to remove this popup",
        reportDate: new Date('2023/10/10'),
        assignedUser: "Rüdiger",
        category: "Maleware",
        severity: "High",
        updates: [],
        isSolved: false,
      },      {
        id: 5,
        title: "Email from Peru",
        shortDescription: "I received an email from peru which informs me that my bank account was spied on",
        reportDate: new Date('2023/10/26'),
        assignedUser: "Ludwig",
        category: "Phishing",
        severity: "Low",
        updates: [],
        isSolved: false,
      },      {
        id: 6,
        title: "PC crashes when opening program xyz",
        shortDescription: "As soon as I try to open the application, my PC crashes and restarts immediately",
        reportDate: new Date('2023/10/16'),
        assignedUser: "Sybille",
        category: "Unauthorised Access",
        severity: "Critical",
        updates: [],
        isSolved: false,
      },{
        id: 7,
        title: "Maleware loaded",
        shortDescription: "After installing xyz there is a popup which shows ads. I'm unlikely to remove this popup",
        reportDate: new Date('2023/10/10'),
        assignedUser: "Rüdiger",
        category: "Maleware",
        severity: "High",
        updates: [],
        isSolved: false,
      },      {
        id: 8,
        title: "Email from Peru",
        shortDescription: "I received an email from peru which informs me that my bank account was spied on",
        reportDate: new Date('2023/10/26'),
        assignedUser: "Ludwig",
        category: "Phishing",
        severity: "Low",
        updates: [],
        isSolved: false,
      },      {
        id: 9,
        title: "PC crashes when opening program xyz",
        shortDescription: "As soon as I try to open the application, my PC crashes and restarts immediately",
        reportDate: new Date('2023/10/16'),
        assignedUser: "Sybille",
        category: "Unauthorised Access",
        severity: "Critical",
        updates: [],
        isSolved: false,
      },
    ];
    const users:User[] = [
            {
                id: 1,
                username: "Ballard",
                firstname: "Hopper",
                lastname: "Hill",
                email: "hopperhill@namegen.com",
                userRole: "Admin",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 2,
                username: "Robbins",
                firstname: "Rivas",
                lastname: "Gillespie",
                email: "rivasgillespie@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 3,
                username: "Brittney",
                firstname: "Carver",
                lastname: "Aguirre",
                email: "carveraguirre@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 4,
                username: "Louella",
                firstname: "Pacheco",
                lastname: "Norris",
                email: "pacheconorris@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 5,
                username: "Lelia",
                firstname: "Martina",
                lastname: "Nieves",
                email: "martinanieves@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 6,
                username: "Gabriela",
                firstname: "Burks",
                lastname: "Patel",
                email: "burkspatel@namegen.com",
                userRole: "Extern",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 7,
                username: "Willis",
                firstname: "Ana",
                lastname: "Estes",
                email: "anaestes@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 8,
                username: "Gail",
                firstname: "Christensen",
                lastname: "Snyder",
                email: "christensensnyder@namegen.com",
                userRole: "Reporter",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            },
            {
                id: 9,
                username: "Gallegos",
                firstname: "Spencer",
                lastname: "Howard",
                email: "spencerhoward@namegen.com",
                userRole: "User",
                password: "",
                assignedIncidents: [],
                createdUpdates: []
            }
    ];
    return {incidents, users};
  }
  constructor() { }
}
