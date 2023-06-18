import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    this.peopleService.getData().subscribe(data => this.persons = data)
  }
  persons: any = {}
}
