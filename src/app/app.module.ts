import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import {HttpClientModule} from "@angular/common/http";
import {EmailService} from "./services/email.service";
import { TestComponent } from './components/test/test.component';
import {MatIconModule} from '@angular/material/icon';
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';
import { NgxSpinnerModule } from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ArtComponent,
    GridListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    [LottieModule.forRoot({ player: playerFactory })],
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ArtsServices, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
