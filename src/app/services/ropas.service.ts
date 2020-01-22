import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RopasService {

    ropas: any[] = [
        {
            id: '1',
            image: 'assets/img/blusa.jpg',
            nombre: 'Blusa',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '2',
            image: 'assets/img/camisa.jpg',
            nombre: 'Camisa',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '3',
            image: 'assets/img/falda.jpg',
            nombre: 'Falda',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '4',
            image: 'assets/img/pantalon.jpg',
            nombre: 'Pantalon',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '5',
            image: 'assets/img/polera.jpg',
            nombre: 'Polera',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '6',
            image: 'assets/img/polera1.jpg',
            nombre: 'Polera 1',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '7',
            image: 'assets/img/polo.jpg',
            nombre: 'Polo',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '8',
            image: 'assets/img/short.jpg',
            nombre: 'Short',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '9',
            image: 'assets/img/vestido.jpg',
            nombre: 'Vestido',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        },
        {
            id: '10',
            image: 'assets/img/zapatilla.jpg',
            nombre: 'Zapatilla',
            description: 'Loremsdasdads',
            fecha: '12-12-2019'
        }
    ]
    constructor() { }

    getRopas(){
        return this.ropas;
    }
}
