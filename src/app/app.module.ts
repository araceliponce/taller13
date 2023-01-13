import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoDeAyerModule } from './lo-de-ayer/lo-de-ayer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoDeAyerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
