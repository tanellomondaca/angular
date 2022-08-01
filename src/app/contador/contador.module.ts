import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ // Que cosas quiero hacer visibles del modulo
        ContadorComponent
    ],
    imports: [ // van modulos aqui adentro
        CommonModule // Para usos de ngFor y ngIf
    ]
})
export class ContadorModule{

}