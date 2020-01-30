import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _ruta:Router) { }

    ngOnInit() {
    }
    buscarRopa(palabra){
        //console.log("Ropa encontrada", palabra);
        this._ruta.navigate(['buscar',palabra]);
    }

}
