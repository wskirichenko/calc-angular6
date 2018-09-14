import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btncalc',
  templateUrl: './btncalc.component.html',
  styleUrls: ['./btncalc.component.css']
})
export class BtncalcComponent implements OnInit {
  btnNum1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  textInp = '';

  btnClick(btn1) {
    this.textInp = this.btnNum1[btn1];
    return this.textInp;
  }
  constructor() { }

  ngOnInit() {
  }

}
