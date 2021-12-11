import { Company } from './../models/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from '../models/jobs.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  @Input() jobs: any;
  @Input() companyId: any;
  src: any;
  companyres: any;
  companyref: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const jobId = params['id'];
      return this.http
        .get<Jobs[]>('https://www.themuse.com/api/public/jobs/' + jobId)
        .subscribe((response: any) => {
          this.jobs = response;

          const companyId = this.jobs.company.id;
          return this.http
            .get<Company[]>(
              'https://www.themuse.com/api/public/companies/' + companyId
            )
            .subscribe((response: any) => {
              this.companyres = response;
              this.src = this.companyres.refs.logo_image;
              this.companyref = this.companyres.refs.landing_page;
            });
        });
    });
  }
}
