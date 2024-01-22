import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Services',
    component: ServicesComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
];
