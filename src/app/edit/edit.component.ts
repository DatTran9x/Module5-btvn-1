import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {Student} from "../../model/student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEdit!:FormGroup;

  constructor(private service:ServiceService) {
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id:new FormControl(this.service.showStudent.id),
      name:new FormControl(this.service.showStudent.name),
      price:new FormControl(this.service.showStudent.price),
      description:new FormControl(this.service.showStudent.description)
    })
  }

  edit(){
    if(confirm("Update?"))
    this.service.create(this.formEdit.value);
  }
}
