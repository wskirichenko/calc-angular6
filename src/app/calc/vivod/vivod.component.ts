import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vivod',
  templateUrl: './vivod.component.html',
  styleUrls: ['./vivod.component.css']
})
export class VivodComponent implements OnInit {
	@Input() clickCount: string;

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){   
        this.clickCount = model;
        this.userNameChange.emit(model);
    }

	constructor() { }
	ngOnInit() {
	}
}
