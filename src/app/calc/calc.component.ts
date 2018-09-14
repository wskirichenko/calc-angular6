import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent  {
  btnNum: string = '1';
  @Input() importTest: string;

  constructor() { }

}
