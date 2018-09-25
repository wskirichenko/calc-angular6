import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirectiv]'
})
export class MydirectivDirective implements OnInit {

  constructor( private elemRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
	// this.render.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
	this.render.setStyle(this.elemRef.nativeElement, 'background-color', 'blue')
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
	this.render.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent')
  }
}
