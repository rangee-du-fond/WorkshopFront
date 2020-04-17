import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-request-creation',
  templateUrl: './request-creation.page.html',
  styleUrls: ['./request-creation.page.scss'],
})
export class RequestCreationPage implements OnInit {
  public employeeid: any;
  public employee: any;
  public courses: any;
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder,private router: Router, public http: HttpClient) {
    this.employeeid = this.router.url.split('/')[2];
    console.log('id', this.employeeid);
    this.ionicForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      courses: ['',[Validators.required]]    
    })
   }

  ngOnInit() {
    this.http.get('https://scio-api.herokuapp.com/users/' + this.employeeid )
    .subscribe(data =>{
      console.log('data', data);      
      this.employee = data;
    })
    this.http.get('https://scio-api.herokuapp.com/courses' )
    .subscribe(data =>{
      console.log('data', data);      
      this.courses = data;
    })        
  }
  

}
