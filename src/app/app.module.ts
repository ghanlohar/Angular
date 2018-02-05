import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/';
import { AppRouterModule } from './app-router.module';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
      BrowserModule ,
      HttpModule,
      ProductModule,
      AppRouterModule
  ],
  declarations: [
      AppComponent,
      WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
