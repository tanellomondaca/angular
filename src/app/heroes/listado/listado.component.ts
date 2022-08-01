import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log(this.heroes);
    this.heroeBorrado = this.heroes.shift() || '';
    // this.heroes.splice(-1);  Tambien funciona
  }

}
