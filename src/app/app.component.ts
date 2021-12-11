import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any;
  company: any;
  location: any;
  jobs: any;

  title = 'jobSearch';
  constructor() {}
}
