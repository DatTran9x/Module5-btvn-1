import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {ServiceService} from "../../service/service.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  student!:Student;

  constructor(private service:ServiceService) {
    this.student=service.showStudent;
  }

  ngOnInit(): void {
  }

  delete(){
    if(confirm("Delete?"))
    this.service.delete(this.student.id);
  }

}
