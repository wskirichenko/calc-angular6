import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-btncalc',
  templateUrl: './btncalc.component.html',
  styleUrls: ['./btncalc.component.css']
})
export class BtncalcComponent implements OnInit {
  btnNum1 = ['9','8','7','6','5','4','3','2','1','0'];
  textInp = '';

  btnClick(btn1) {
    this.textInp = this.textInp+btn1;
    return this.textInp;
  }
  constructor() { }

  ngOnInit() {
  }

}
