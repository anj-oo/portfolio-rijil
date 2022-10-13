import { ContactComponent } from "./components/contact/contact.component";
import { ArtComponent } from "./components/art/art.component";
import { AboutComponent } from "./components/about/about.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'About', component:AboutComponent},
  {path:'Art', component:ArtComponent},
  {path:'Contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
