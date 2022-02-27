import {Injectable} from '@angular/core';
import {Student} from "../model/student";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  showStudent:Student=new Student(0,"",0,"");

  list: Student[] = [
    {id: 1, name: "Ha Noi",price:0, description: "Dep"},
    {id: 2, name: "Da Nang",price:0, description: "Dep"}
  ]

  create(student: Student) {
    let check = true;
    for (let i = 0; i <this.list.length; i++) {
      if (this.list[i].id == student.id) {
        this.list[i].name = student.name;
        this.list[i].price = student.price;
        this.list[i].description = student.description;
        check = false;
      }
    }
    if (check) {
      this.list.push(student);
    }
  }

  delete(id:number){
    for (let i = 0; i <this.list.length; i++) {
      if(this.list[i].id === id) {
        this.list.splice(i, 1);
      }
    }
  }

  find(student: Student) {
    this.showStudent=student;
  }
}
