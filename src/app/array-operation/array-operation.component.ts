import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-operation',
  templateUrl: './array-operation.component.html',
  styleUrls: ['./array-operation.component.css']
})
export class ArrayOperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.insertElement();
    // this.deleteElement();
    this.searchElement();
  }
  insertElement(){
    let data=[60,30,10,64,40];
    let newElemnt=70;
    let position=2;
    console.log(data);  
    for(let i=data.length-1;i>=0;i--){
       
        if(i>=position){
          data[i+1]=data[i]
          if(i==position){
            data[1]=newElemnt;
          }
        }
        console.log(data);
    }

    // not working
    // let items = [25,35,45,55,65,75,85,95]
    // console.log("asdasd",items.splice(2,0,2000));
  }

  deleteElement(){
    let data=[60,30,10,64,40];
    let position=2;
    for (let i = position; i < data.length-1; i++) {
      data[i]=data[i+1];
    }
    data.length=data.length-1;
    console.log("element 10",data);
    //console.log("",data.splice(2,3));
  }

  searchElement(){
   let data=[20,40,60,5,10,70,80,99];
   let item=99;
   let index=undefined;
   for(let i=1;i<=data.length-1;i++){
    if(data[i]===item){
      index=data[i];
      break;
    }
   }
   console.log("",index?.valueOf() )
   console.log("",data.indexOf(item));
   console.log(data);
   console.log(data.splice(2,1));//itemp delted
   console.log(data);
   console.log(data.reverse());

   console.log(data.sort(function(a, b){return a - b}));
  console.log(data.sort(function(a, b){return b - a}))
  //sorting random order

  console.log(data.sort(function(){return 0.5 - Math.random()}));
  //find highest lowest vakye

  console.log("highest value",data.sort(function(a, b){return a - b}));

  }
}
