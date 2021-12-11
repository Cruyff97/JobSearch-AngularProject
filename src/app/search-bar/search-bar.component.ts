import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jobs } from '../models/jobs.model';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
interface Experience {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  jobs: Jobs[] = [];
  selectedValue: string | undefined;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  inputCompany: string = '';

  experiences: Experience[] = [
    { value: 'Entry%20Level', viewValue: 'Entry Level' },
    { value: 'Mid%20Level', viewValue: 'Mid Level' },
    { value: 'Senior%20Level', viewValue: 'Senior Level' },
    { value: 'management', viewValue: 'management' },
    { value: 'internship', viewValue: 'internship' },
  ];
  constructor(private http: HttpClient, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  capitalizeString() {
    if (this.inputCompany) {
      this.inputCompany =
        this.inputCompany[0].toUpperCase() + this.inputCompany.slice(1);
    }
  }
  ngOnInit(): void {}
  public onSubmit(experience: any) {
    document.getElementById('spinner')!.style.display = 'table';
    stopSpinner();

    this.capitalizeString();
    if (this.inputCompany) {
      return this.http
        .get(
          'https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=' +
            experience.value +
            '&company=' +
            this.inputCompany +
            '&page=1'
        )
        .subscribe((response: any) => {
          this.jobs = response.results;
        });
    } else {
      return this.http
        .get(
          'https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=' +
            experience.value +
            '&page=1'
        )
        .subscribe((response: any) => {
          this.jobs = response.results;
        });
    }
  }
}

function stopSpinner() {
  {
    setTimeout(function stop() {
      document.getElementById('spinner')!.style.display = 'none';
    }, 1000);
  }
}
