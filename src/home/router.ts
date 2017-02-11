import { Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { WelcomeComponent } from './components/welcome';

export const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'welcome',  component: WelcomeComponent }
];