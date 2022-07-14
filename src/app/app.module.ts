import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisorComponent } from './visor/visor.component';
import { SpaceVisorComponent } from './space-visor/space-visor.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    SpaceVisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
