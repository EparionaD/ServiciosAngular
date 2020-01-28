import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from '../../services/ropas.service';

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html',
    styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

    detalle:any = {};

    constructor(private _detalleRutas:ActivatedRoute, private _ropas:RopasService) {
        this._detalleRutas.params.subscribe(
            params=>{
                this.detalle = _ropas.getDetalle(params.id);
            }
        );
    }

    ngOnInit() {
    }

}
