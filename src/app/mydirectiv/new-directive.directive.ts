import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective {
	@Input() set appNewDirective(condition: boolean) {
		if (!condition) {
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}

  	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
