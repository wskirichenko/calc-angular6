import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnc',
  templateUrl: './btnc.component.html',
  styleUrls: ['./btnc.component.css']
})
export class BtncComponent implements OnInit {
	clickCnt:number = 0;
	strInput = ''
	btnNum1 = ['9','8','7','6','5','4','3','2','1','0'];
	testIf = 'a';
	@Output() clickChange: EventEmitter<string> = new EventEmitter();
  
	public clickMe(numBtn){
		this.strInput = this.strInput + numBtn;
		this.clickChange.emit(this.strInput);
		// console.log(numBtn);
	}

	constructor() { }
	ngOnInit() {
		
	}
}
