import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PaintingItemComponent } from './painting-item/painting-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IconBarComponent,
    SearchBarComponent,
    PaintingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
