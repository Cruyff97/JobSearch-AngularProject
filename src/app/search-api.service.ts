import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from './models/jobs.model';
@Injectable({
  providedIn: 'root'
})
export class SearchAPIService {
jobs: any;

  constructor(public http: HttpClient) { }
  public search(experience: any){
    return this.http.get<Jobs[]>('https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=' + experience.value + '&page=1').subscribe((response:any) =>{
    
      
      console.log(response.results);
      
      this.jobs=response.results
      console.log(this.jobs);
      
      
      });
  }
}
