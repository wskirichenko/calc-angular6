import { Component } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {

	clickCount:number=0;

	constructor(private share:ShareService){
	  this.share.onClick.subscribe(cnt=>this.clickCount = cnt);
	}

}
