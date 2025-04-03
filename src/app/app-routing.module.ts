import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"home" ,pathMatch:'full' },
  {path:"home" , component:HomeComponent , title:'home'},
  {path:"about" , component: AboutComponent ,title:"about"},
  {path:"contact" , component:ContactComponent , title:"contact"},
  {path:"portfolio" , component:PortfolioComponent , title:"portfolio"},
  {path:"**" , component:PageNotFoundComponent , title:"Page Not Found"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
