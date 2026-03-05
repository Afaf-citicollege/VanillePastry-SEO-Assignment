import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Cakes } from './pages/cakes/cakes';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'cakes', component: Cakes }
];

