import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vivod',
  templateUrl: './vivod.component.html',
  styleUrls: ['./vivod.component.css']
})
export class VivodComponent implements OnInit {
	@Input() clickCount: number;

	constructor() { }
	ngOnInit() {
	}

	log() {
		
	}

}
