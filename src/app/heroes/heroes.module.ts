import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Que cosas quiero hacer visibles del modulo
        ListadoComponent
    ],
    imports: [ // van modulos aqui adentro
        CommonModule // Para usos de ngFor y ngIf
    ]
})
export class HeroesModule{

}