import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  // templateUrl: './page-not-found.component.html',
  template: `
  <h1 class="display-1">Oops page not found. . .</h1>
  <img src="assets/img/oops.jpg" class="img-fluid rounded align-middle" alt="PageNotFound">`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
