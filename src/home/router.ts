import { Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { NewComponent } from './components/new';
import { ListComponent } from './components/list';

export const homeRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'new',  component: NewComponent },
  { path: 'matchs',  component: ListComponent }
];