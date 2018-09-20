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

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CompAComponent,
	CompBComponent,
	VivodComponent,
	BtncComponent
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
