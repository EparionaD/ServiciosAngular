import { Component, OnInit } from '@angular/core';
import { RopasService } from '../../services/ropas.service';

@Component({
    selector: 'app-ropas',
    templateUrl: './ropas.component.html',
    styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {

    ropas: any[] = [];
    constructor(private _ropasServicios:RopasService) {
        this.ropas = _ropasServicios.getRopas();
    }

    ngOnInit() {
    }

}
