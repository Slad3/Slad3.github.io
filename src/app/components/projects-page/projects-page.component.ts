import { Component, OnInit, Input } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Request } from '../../api/request.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

	backendUrl = 'https://api.benbarcaskey.com/';

	full = true;
	dev = false;
  
	loaded = false;
  
	tempProject = {
	  title: 'Sample Title',
	  description:
		'Sample description Sample description Sample description Sample description Sample description',
	  date: '1942-12-7',
	  typeOfProject: 'Some Type',
	  tags: ['Sample', 'Sample', 'JSON', 'Sample'],
	};
  
	projects: [];

	constructor(private request: Request, private http: HttpClient) {
		if (location.host.toString() === 'localhost:4200') {
		  this.dev = true;
		  //   this.backendUrl = 'http://localhost:8080/';
		} else {
		  this.dev = false;
		}
	  }

  ngOnInit(): void {

    this.projects = [];
    this.loadProjects();


  }

  loadProjects() {

    const formData: FormData = new FormData();

    let req = new HttpRequest('GET', this.backendUrl + 'projects', {
      responseType: 'text',
    });

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
		  this.projects = JSON.parse(event.body.toString());
		  this.loaded = true;
        }
      },
      (error) => {
		console.log('Error');
		console.log(error);
      }
    );
  }
}
