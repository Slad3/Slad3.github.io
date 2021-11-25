import { Component, Input, OnInit } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { Request } from '../../api/request.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  @Input() full: boolean;

  backendUrl = 'https://api.benbarcaskey.com/';
  dev = false;

  loaded = false;

  publications = []

  constructor(private request: Request, private http: HttpClient) {
    if (location.host.toString() === 'localhost:4200') {
      this.dev = true;
        // this.backendUrl = 'http://localhost:8080/';
    } else {
      this.dev = false;
    }
  }

  ngOnInit(): void {
    if (this.full === undefined) {
      this.full = true;
    } else {
      this.full = false;
    }

	this.loadPublications()

  }

  loadPublications() {
    let req = new HttpRequest(
      'GET',
      this.backendUrl + 'publications',
      {
        responseType: 'text',
      }
    );

    this.http.request(req).subscribe(
      (event) => {
        if (event instanceof HttpResponse) {
          this.publications = JSON.parse(event.body.toString());
		  this.loaded = true;
        }
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
