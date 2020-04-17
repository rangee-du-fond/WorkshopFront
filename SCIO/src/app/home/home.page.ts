import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
  items : any;

  constructor(private dataService: DataService, public formBuilder: FormBuilder) {
  this.ionicForm = this.formBuilder.group({
    topics: ['', [Validators.required]],
    levels: ['']    
  })

  }

  ngOnInit() {
    


  }

  submitForm() {
    this.items = this.dataService.filterRequests(this.ionicForm.value.topics, this.ionicForm.value.levels);    
  }

}