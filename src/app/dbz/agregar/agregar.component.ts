import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
})
export class AgregarComponent {


    @Input('new')
    nuevo: Personaje = {
        nombre: '',
        poder: 0,
    };

    @Output()
    nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    cambiarNombre(event: any) {}

    agregar() {
        if (this.nuevo.nombre.trim().length === 0) {
            return;
        }

        this.nuevoPersonaje.emit(this.nuevo);

        console.log(this.nuevo);
        this.nuevo = {
            nombre: '',
            poder: 0,
        };

    }
}
