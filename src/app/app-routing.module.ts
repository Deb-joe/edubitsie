import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ClientComponent } from './client/client.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
   
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'Contact', component: ContactComponent },
  
];



 



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
