import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor( private router: Router) { }
 
  ngOnInit() {
  }

  onClickPeople(): void {
    console.log("clicked");
    this.router.navigate(['people']);
  }
}