import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }