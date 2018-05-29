import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CalcComponent } from './calc/calc.component';
import { CalFormComponent } from './cal-form/cal-form.component';
import { BackService } from './back.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CalcComponent,
    CalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
  ],
  providers: [
    BackService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
