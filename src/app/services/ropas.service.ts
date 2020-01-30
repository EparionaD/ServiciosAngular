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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.png'
        },
        {
            id: '2',
            image: 'assets/img/camisa.jpg',
            nombre: 'Camisa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.png'
        },
        {
            id: '3',
            image: 'assets/img/falda.jpg',
            nombre: 'Falda',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.png'
        },
        {
            id: '4',
            image: 'assets/img/pantalon.jpg',
            nombre: 'Pantalon',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/vicky.jpg'
        },
        {
            id: '5',
            image: 'assets/img/polera.jpg',
            nombre: 'Polera',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/vicky.jpg'
        },
        {
            id: '6',
            image: 'assets/img/polera1.jpg',
            nombre: 'Polera 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/vicky.jpg'
        },
        {
            id: '7',
            image: 'assets/img/polo.jpg',
            nombre: 'Polo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. s',
            fecha: '12-12-2019',
            fabrica: 'assets/img/vicky.jpg'
        },
        {
            id: '8',
            image: 'assets/img/short.jpg',
            nombre: 'Short',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.png'
        },
        {
            id: '9',
            image: 'assets/img/vestido.jpg',
            nombre: 'Vestido',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.jpg'
        },
        {
            id: '10',
            image: 'assets/img/zapatilla.jpg',
            nombre: 'Zapatilla',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada est ac eros feugiat, vel aliquam metus ornare. Nam eu purus congue, commodo mi ut, mattis nibh. In hac habitasse platea dictumst. Donec convallis aliquam venenatis. Nullam at tellus nec libero aliquet suscipit et gravida mauris. Cras sed tempus augue. Vivamus massa erat, dignissim vitae nunc nec, feugiat pretium augue. Maecenas non lectus nisi. Proin eget risus lectus. ',
            fecha: '12-12-2019',
            fabrica: 'assets/img/asc.png'
        }
    ]
    constructor() { }

    getRopas(){
        return this.ropas;
    }
    getDetalle(i:number){
        return this.ropas[i];
    }
    getBuscar(palabra){
        let encontrado:string[] = [];
        this.ropas.forEach(element => {
            //console.log(element.nombre);
            //console.log(palabra);
            if ((element.nombre).toLowerCase() === palabra.toLowerCase()) {
                let a1 = element;
                //console.log(a1);
                encontrado.push(a1);
            }
        });
        return encontrado;
        //console.log(encontrado);
    }
}
