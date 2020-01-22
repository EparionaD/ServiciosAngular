import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Importando servicios
import { RopasService } from '../app/services/ropas.service';

//Importando Rutas
import { app_rutas } from './app.routes';

//Importando Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RopasComponent,
        AboutComponent,
        NotfoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        app_rutas
    ],
    providers: [
        RopasService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
