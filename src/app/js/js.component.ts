import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css'],
})
export class JsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.gettingLocalData();
    this.gettingwindow();
  }

  gettingLocalData() {
    // let name = "my name";
    // let value = "John Smith"
    // document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    // alert( document.cookie );
    //document.cookie="user=ayushyadav";
    //document.cookie = "user=John; domain=bayareaip.com"
    //console.log(document.cookie);
  }
  gettingwindow() {
    // window.open('https://javascript.info/');
    // let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    //  width=0,height=0,left=-1000,top=-1000`;

    // open('/', 'test', params);

    //open left side
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

open('/', 'test', params);

window.onblur = () => window.focus();
  }

  crossWindowCommunication(){
   
}
}

//transpiler mein basically ye hota hai ki agar hum upna code update kare older to newest tab use krte hai transpiler
//babel compiler per check kr skte ho kya naya aaya hai 
//seesion storage mein agar hum next tab open krenge new databse banata hai 