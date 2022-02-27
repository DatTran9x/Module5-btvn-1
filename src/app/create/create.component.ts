import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formCreate!:FormGroup;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.formCreate=new FormGroup({
      id: new FormControl(0),
      name: new FormControl(""),
      price: new FormControl(0),
      description: new FormControl("")
    })
  }



  create():void{
   if(confirm("Create?")){
     this.service.create(this.formCreate.value);
   }
  }
}
