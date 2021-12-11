import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Jobs } from '../models/jobs.model';
import {SearchAPIService} from 'src/app/search-api.service'
interface Experience {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() inserted= new EventEmitter<any>();
  jobs: Jobs[] =[]
  selectedValue: string | undefined;
  
  experiences: Experience[] = [
    {value: 'Entry%20Level', viewValue: 'Entry Level'},
    {value: 'Mid%20Level', viewValue: 'Mid Level'},
    {value: 'Senior%20Level', viewValue: 'Senior Level'},
    {value: 'management', viewValue: 'management'},
    {value: 'internship', viewValue: 'internship'},
    
  ];
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
  }
  public onSubmit(experience: any){
  
    return this.http.get<Jobs[]>('https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=' + experience.value + '&page=1').subscribe((response:any) =>{
    
      
      console.log(response.results);
      
      this.jobs=response.results
      console.log(this.jobs);

      
      
      });
     }

}

