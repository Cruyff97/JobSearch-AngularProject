import { Component } from '@angular/core';
import { SearchAPIService } from './search-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pages : any;
  company:any;
  location:any;
  jobs:any;

  title = 'jobSearch';
  constructor(){}

   
  //  this.company= this.pages[0].company.name
  //  this.location= this.pages[0].locations[0].name
  // this.job=this.pages[0].categories[0].name
  }
 

  

