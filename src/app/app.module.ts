import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ArtComponent } from './components/art/art.component';
import { ArtsServices } from './services/arts.services';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListComponent } from './components/grid-list/grid-list.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ArtComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule

  ],
  providers: [ArtsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
