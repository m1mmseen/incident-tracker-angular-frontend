import {Incident} from "./incident";

export interface User {
    id: number,
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    userRole: String,
    password: String,
    assignedIncidents: Incident[],
    createdUpdates: []
}
