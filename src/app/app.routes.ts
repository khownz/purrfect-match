import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptConfirmComponent } from './pages/adopt-confirm/adopt-confirm.component';

export const PATHS = {
  ROOT: '',
  ADOPT_CONFIRM: 'adopt-confirm',
};

export const routes: Routes = [
  {
    path: PATHS.ROOT,
    component: HomeComponent,
  },
  {
    path: PATHS.ADOPT_CONFIRM,
    component: AdoptConfirmComponent,
  },
  {
    path: '**',
    redirectTo: PATHS.ROOT,
  },
];
