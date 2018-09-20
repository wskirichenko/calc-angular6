import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnc',
  templateUrl: './btnc.component.html',
  styleUrls: ['./btnc.component.css']
})
export class BtncComponent implements OnInit {
	clickCnt:number = 0;
	btnNum1 = ['9','8','7','6','5','4','3','2','1','0'];
	@Output() clickChange: EventEmitter<string> = new EventEmitter();
  
	public clickMe(numBtn){
		this.clickChange.emit(numBtn);
		console.log(numBtn);
	}


	constructor() { }
	ngOnInit() {
		
	}
}
