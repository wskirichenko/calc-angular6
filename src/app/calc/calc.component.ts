import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent  {
	cnt :number = 0;
	public onAClicked(cnt){
	  this.cnt = cnt;
	}

	constructor() { }
}
