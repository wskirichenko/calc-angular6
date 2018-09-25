import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorDirect]'
})
export class ColorDirectDirective implements OnInit {
	@Input() defaultColor : string = 'blue';
	@Input('appColorDirect') new2Color : string = 'gray';
	@HostBinding('style.backgroundColor') backgroundColor : string; 

  	constructor(private elRef: ElementRef, private rendered: Renderer2) {  	  
	}

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
	}

	@HostListener('mouseenter') mouseover(eventData: Event) {
		this.backgroundColor = this.new2Color;
	} 
	@HostListener('mouseleave') mouseleave(eventData: Event) {
		this.backgroundColor = this.defaultColor;
	}
}
