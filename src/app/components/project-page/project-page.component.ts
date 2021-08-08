import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;

  backendUrl = `https://api.benbarcaskey.com/`;
  loaded = false;

  pinned = false;
  productionToggle = true;
  githubToggle = true;

  project: {};

  title: string;
  description: string;
  tags = [];
  typeOfProject: string;
  lastUpdated: string;
  links = {
    github: '',
    production: '',
  };

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(location);
    if (location.host.toString() === 'localhost:4200') {
        // this.backendUrl = 'http://localhost:8080/';
    } else {
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      let name = params['name'];

      if (name !== undefined) {
        let loadedProject = this.getProject(name);

        loadedProject.file.subscribe((file) => {
          this.project = JSON.parse(file);
          this.loadProject();
        });
      } else if (this.id != null) {
        let loadedProject = this.getProject(this.id);

        loadedProject.file.subscribe((file) => {
          this.project = JSON.parse(file);
          this.loadProject();
        });
      } else if (this.name != null) {
        let loadedProject = this.getProject(this.name);

        loadedProject.file.subscribe((file) => {
          this.project = JSON.parse(file);
          this.loadProject();
        });
      } else {
        this.project = {
          title: 'Sample Title',
          description:
            'Sample description Sample description Sample description Sample description Sample description',
          lastUpdated: '1942-12-7',
          typeOfProject: 'Some Type',
          tags: ['Python', 'Flask', 'JSON', 'Apache'],
        };
      }
    });
  }

  getProject(input) {
    let url = this.backendUrl + `project?name=${input}`;
    let req = new HttpRequest('GET', url, {
      responseType: 'text',
    });

    const response = new Subject<any>();

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          response.next(event.body);
          response.complete();
        }
      },
      (error) => {
        console.log('Error', error);
        return { Error: error };
      }
    );

    return { file: response.asObservable() };
  }

  loadProject() {
    this.loaded = true;
  }
}
