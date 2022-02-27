import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  student!:Student;

  constructor(private service:ServiceService) {
    this.student=service.showStudent;
  }

  ngOnInit(): void {
  }

  showStudent(student:Student){
    this.service.find(student);
  }
}
