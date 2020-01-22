import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const rutas : Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'ropas', component: RopasComponent},
    { path: 'about', component: AboutComponent },
];


export const app_rutas = RouterModule.forRoot(rutas);