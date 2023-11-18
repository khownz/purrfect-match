import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

export const PATHS = {
    ROOT: '**',
};

export const routes: Routes = [
    {
        path: PATHS.ROOT,
        component: HomeComponent,
    },
];
