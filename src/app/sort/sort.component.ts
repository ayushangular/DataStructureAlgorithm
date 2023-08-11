import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  users: any = [
    { id: "1", name: "Ayush", isActive: "true" ,age:"18"},
    { id: "2", name: "jogi", isActive: "false" ,age:"28"},
    { id: "3", name: "Yash", isActive: "true" ,age:"8"},
    { id: "4", name: "Jeetu", isActive: "false" ,age:"188"},
    { id: "5", name: "ArKhan", isActive: "true" ,age:"22"}
  ]
  constructor() { }

  ngOnInit(): void {
    // console.log("using for loop");
    // this.usingForLoop();
    // console.log("Using For Each loop");
    // this.usingForEachLoop();
    // console.log("Only Active user true");
    // this.getBackOnlyActiveUser();
  
    //  console.log("Descending Order");
    //  this.sortDescendingOrder();

   // console.log(" Ascending Sorting Data");
    this.sortAscendingOrder();
    this.optimizeCode();
  }

  usingForLoop(){
   const names:any=[];
   for (let i=0;i<=this.users.length-1;i++){
       names.push(this.users[i]);
   }
   console.log(names);
  }

  usingForEachLoop(){
    this.users.forEach((name:any)=>{
      if(name.age==8){
        console.log(name.age);
      }
    })
  }
  getBackOnlyActiveUser(){
    const names:any=[];
    for(let i=0;i<this.users.length;i++)
    {
        if(this.users[i].isActive){
          names.push(this.users[i].name)
        }
    }
    console.log("is Active Users",names);
  }

  sortDescendingOrder(){
   this.users.sort((a:any,b:any)=>{
    return <any>(b.age) - <any>(a.age);
  })
    console.log("Desceinding order sorting data---",this.users);
  }

  sortAscendingOrder(){
   let  values=[8,1,9,2,4,3,2,6]
   console.log("Values",values.sort());
   let value= this.users.sort((a:any, b:any) => {
    return a.age - b.age;
    });
    // let data=this.users.sort((a:any, b:any) => parseFloat(b.age) - parseFloat(a.age));
    console.log("sorting data", value);
  }
  
  optimizeCode(){
    let x: number = 10, y = 20;
      x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')
  }
}

