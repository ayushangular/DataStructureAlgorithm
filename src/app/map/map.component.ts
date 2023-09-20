import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor( private router: Router) { }
 
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
  mapOperation() {
    const names = this.student.map((value: any) => {
      if (value.id == 1) {
        return value.name;
      }
    })
    console.log("Printing Map value", names.join(', '));
  }
  mapWithFilter(){
    const names= this.student.filter((value: any) => value.sports=="hr").map((carValue:any)=>{
      return carValue.name;
    })
    const names2=this.student.filter((value:any)=>value.name=="Ayush").map((carvalue:any)=>{
      return carvalue.sports;
    })

    console.log("filter and map",names);
    console.log("filter and map",names2);
  }


}
