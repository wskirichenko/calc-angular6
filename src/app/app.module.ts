import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { ShareService } from './share.service';
import { VivodComponent } from './calc/vivod/vivod.component';
import { BtncComponent } from './calc/btnc/btnc.component';
import { OperatComponent } from './calc/operat/operat.component';
import { MydirectivDirective } from './mydirectiv/mydirectiv.directive';
import { ColorDirectDirective } from './mydirectiv/color-direct.directive';
import { NewDirectiveDirective } from './mydirectiv/new-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CompAComponent,
	CompBComponent,
	VivodComponent,
	BtncComponent,
	OperatComponent,
	MydirectivDirective,
	ColorDirectDirective,
	NewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ShareService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
