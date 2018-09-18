import { Component } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
	clickCnt: number = 0;
	constructor(private share: ShareService) {
	  this.share.onClick.subscribe(cnt => this.clickCnt = cnt);
	}
  
	public clickMe() {
	  this.share.doClick();
	}

}
