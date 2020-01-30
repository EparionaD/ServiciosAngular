import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from '../../services/ropas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

    detalle:any = [];

    constructor(private _detalleRutas:ActivatedRoute, private _ropas:RopasService, private _ruta:Router) {
        this._detalleRutas.params.subscribe(
            params=>{
                console.log(params.palabra);
                this.detalle = _ropas.getBuscar(params.palabra);
                console.log(this.detalle);
            }
        );
    }

    ngOnInit() {
    }
    verRopas(i:number){
        this._ruta.navigate(['detalles',i]);
    }

}
