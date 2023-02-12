import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','Ironman', 'Hulk','Goku','Thor'];
    heroeBorrado: string = ''

    borrarHeroe(): void{
      console.log('borrando...');
      this.heroeBorrado = this.heroes.pop() || '';
      console.log(this.heroeBorrado)
  
    }
}
