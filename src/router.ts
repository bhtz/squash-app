import { Routes } from '@angular/router';

import { homeRoutes } from './home/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ...homeRoutes
];