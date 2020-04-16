import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items: any = [];

  constructor() {
    
    this.items = [
      { id: "0001", description: "blablabla",  course: { level: "3eme" , topic: "Maths"}, createdAt: "12/04/2020" },
      { id: "0002", description: "blablabla",  course: { level: "3eme" , topic: "Maths"}, createdAt: "13/04/2020"  },
      { id: "0003", description: "blablabla",  course: { level: "5eme" , topic:"Maths"}, createdAt: "16/04/2020"},
      { id: "0004", description: "blablabla",  course: { level: "5eme" ,topic:"Français"}, createdAt: "16/04/2020"  }

    ];
  }


  filterItems(topics, levels) {
    
    return this.items.filter(item => {

      for (const topic in topics) {
        if (item.course.topic.toLowerCase() == topics[topic].toLowerCase() ) {
          
          if (levels) {           
          
          for (const level in levels) {
            if (item.course.level.toLowerCase() == levels[level].toLowerCase() ) {
                return item              
            }
          
          }
        }else{
          return item;
        }
        
        
        }
      } 
      

    });
  }

}
