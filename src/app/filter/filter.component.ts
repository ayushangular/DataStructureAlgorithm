import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private router: Router) { }
  newGlobalArray = [];
  student: any = [
    { id: "1", name: "Ayush", sports: "cricket" },
    { id: "2", name: "jogi", sports: "typescript" },
    { id: "3", name: "yash", sports: "firebase" },
    { id: "4", name: "yash", sports: "firebase" },
    { id: "1", name: "sweety", sports: "nest" },
    { id: "6", name: "jeetu", sports: "html" },
    { id: "7", name: "ar", sports: "java" },
    { id: "8", name: "amrita", sports: "hr" },
  ]
  ngOnInit(): void {
  }


  withFilter() {
    // this.student.forEach((value:any)=>{
    //   console.log("Printing array",value);
    // })
    const newArray = this.student.filter((value: any) => {
      if (value.id == 1) {
        return true;
      } else return false;
    })
    console.log("New Array", newArray);
  }

  withoutFilter() {
    const newArray = [];
    for (let i = 0; i <= this.student.length; i++) {
      // console.log("loop data",this.student[i]);
      if (this.student[i].id == 1) {
        newArray.push(this.student[i]);
      }
    }
    console.log("New Array Data", newArray)
  }


}
