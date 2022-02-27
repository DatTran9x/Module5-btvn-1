import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';
import {ServiceService} from "../../service/service.service";


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  list:Student[]=[];

  constructor(private service:ServiceService) {
    this.list = service.list;
  }

  ngOnInit(): void {
  }

  showStudent(student:Student){
    this.service.find(student);
  }


}
