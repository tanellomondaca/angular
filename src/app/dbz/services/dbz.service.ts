import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000,
        },
        {
            nombre: 'Vegeta',
            poder: 7500,
        },
    ];

    get personajes(): Personaje[] {
        // Buena practica: romper la referencia al array original
        return [...this._personajes];
    }

    constructor(){
        // console.log('servicio inicializado');
    }

    // Métodos
    agregarPersonaje( personaje: Personaje){
        this._personajes.push(personaje);
    }
}
