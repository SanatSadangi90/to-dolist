import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addlist;
  isChecked = true;
  ishidden = false;
  i;
  yay = [];
  constructor() {
    console.log(this.yay);
  }

  add(){
      this.yay.push(this.addlist);
  }
  
  edit(val:any){
    this.yay[this.i] = this.addlist;
  }

  delete(val : any){
    this.yay.splice(this.i, 1);
  }

  checkBoxChecked(val : any) {
    this.isChecked = true;
  }
   
}
