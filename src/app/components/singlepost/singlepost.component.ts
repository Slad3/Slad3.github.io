import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Post } from '../../Post';
import {
	HttpClient,
	HttpErrorResponse,
	HttpEventType,
	HttpRequest,
	HttpResponse,
  } from "@angular/common/http";

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {
	post: Post;
	url = "https://localhost:8080/"
	path = ""


  constructor(public router: ActivatedRoute,
    private http: HttpClient) {
		// this.path = router.url._value[1].path;
		this.updatePost();
   }

  ngOnInit() {
  }



  updatePost(){
    const req = new HttpRequest("GET", this.url + "blog", {
		reportProgress: false,
		responseType: "text",
	  });

	  this.http.request(req).subscribe(
		(event) => {
		  if (event instanceof HttpResponse) {
			if (typeof event.body === "string") {
			  let received = JSON.parse(event.body);


			  for(let po in received){
				  let temp = JSON.parse(received[po])
				this.post = new Post(temp.Post)
			  }

			}
		  }
		},
		(error) => {
		  console.log("Error", error);

		}
	  );



  }

}
