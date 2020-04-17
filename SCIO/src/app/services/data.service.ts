import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public requests: any = [];
  public courses: any = [];

  results: Observable<any>;

  constructor(public http: HttpClient) {
    this.getRequests()
    this.getCourses()
  }

  getRequests(){  
  this.results = this.http.get('https://scio-api.herokuapp.com/requests');
    this.results.subscribe(data => {
      this.requests = data;
    }
    )
  }
  getCourses(){  
    this.results = this.http.get('https://scio-api.herokuapp.com/courses');
      this.results.subscribe(data => {
        this.courses = data;
      }
      )
    }
  getRelatedCourse(idCourse): any{
    for (const course in this.courses) {
      
      if (this.courses[course]['id'] == idCourse) {
        
        return this.courses[course];
        
      }
    }
  }
  private toDateString(date: Date): string {
    console.log('date', date);
    date = new Date(date);
    return ( ("0" + (date.getDate())).slice(-2)  + '-' 
       + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
       + date.getFullYear().toString() )
}

  filterRequests(topics, levels) {
    
    return this.requests.filter(request => {     
      
      for (const topic in topics) {
        if ( this.getRelatedCourse(request['id_course'])['theme_name'].toLowerCase() == topics[topic].toLowerCase() ) {
          
          if (levels) {           
          
          for (const level in levels) {
            if (this.getRelatedCourse(request['id_course'])['level_name'].toLowerCase() == levels[level].toLowerCase() ) {
              request['level_name'] = this.getRelatedCourse(request['id_course'])['level_name'];
              request['theme_name'] = this.getRelatedCourse(request['id_course'])['theme_name'];
              request['createdAt'] = this.toDateString(request['createdAt']); 
              return request              
            }
          
          }
        }else{
          request['level_name'] = this.getRelatedCourse(request['id_course'])['level_name'];
          request['theme_name'] = this.getRelatedCourse(request['id_course'])['theme_name'];
          request['created_at'] = this.toDateString(request['created_at']); 

          
          return request;
        }
        
        
        }
      } 
      

    });
  }

}
