import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  public employeeid: any;
  public meetings : any;
  public courses: any;
  public users: any;
  constructor(private route: ActivatedRoute, private router: Router, public http: HttpClient  ) {
    this.employeeid = this.router.url.split('/')[2];    
   }

  ngOnInit() {
     this.http.get('https://scio-api.herokuapp.com/users/' + this.employeeid + '/meetings')
    .subscribe(data =>{
      console.log('data', data);      
      this.meetings = data;
    })    
  }

}
