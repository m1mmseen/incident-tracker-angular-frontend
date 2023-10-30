import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit{

  constructor() {
  }

  @Input() id:number = 1;
  send(id:number){
      this.id = id;
      console.log(this.id)
  }

  ngOnInit(): void {}



}
