import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  results: Observable<any>;

  constructor(public formBuilder: FormBuilder,public router : Router, public http: HttpClient  ) { 
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]]    
    })
  }

  ngOnInit() {
  }

sendPostRequest() {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    
    let postData = {
            "email": this.ionicForm.value.email,
            "password": this.ionicForm.value.password,
            
    }

    this.http.post("https://scio-api.herokuapp.com/users/connect",postData,{ headers:headers})
      .subscribe(data => {
        console.log(data);
        console.log(data['id_role']);
        if(data['id_role'] == 1){
        this.router.navigateByUrl('home')
        }else if(data['id_role'] == 0){
          this.router.navigateByUrl('employee/'+data['id'])          
        }
       }, error => {
        console.log(error);
      });
  }


  submitForm(form){
        
    if(this.ionicForm.valid)
    this.sendPostRequest();
    
  }
}
