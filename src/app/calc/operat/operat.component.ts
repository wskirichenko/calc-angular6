import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-operat',
	templateUrl: './operat.component.html',
	styleUrls: ['./operat.component.css']
})
export class OperatComponent implements OnInit {
	@Input() clickCount: number;
	opMass = ['+', '-', '*', '/'];

	onClik(feature: string) {
		console.log(this.clickCount)
	}

	constructor() { }
	ngOnInit() {
	}

}
