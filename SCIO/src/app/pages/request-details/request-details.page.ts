import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.page.html',
  styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {
  requestid: any;
  request: any;
  ionicForm: FormGroup;

  constructor(public formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, public http: HttpClient  ) { 
    this.requestid = this.router.url.split('/')[2];
    
    this.ionicForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      courses: ['',[Validators.required]]    
    })
  }

  ngOnInit() {
    this.http.get('https://scio-api.herokuapp.com/requests/' + this.requestid )
    .subscribe(data =>{
      console.log('data', data);      
      this.request = data;
      this.request['created_at'] = this.toDateString(this.request['created_at']);
    })
  }

  private toDateString(date: Date): string {
    console.log('date', date);
    date = new Date(date);
    return ( ("0" + (date.getDate())).slice(-2)  + '-' 
       + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
       + date.getFullYear().toString() )
}



}
