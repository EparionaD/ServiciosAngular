import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const rutas : Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'ropas', component: RopasComponent},
    { path: 'about', component: AboutComponent },
    { path: 'detalles/:id', component: DetallesComponent },
];


export const app_rutas = RouterModule.forRoot(rutas);