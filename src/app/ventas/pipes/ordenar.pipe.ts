import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(items: Heroe[]): Heroe[] {
    items = items.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
    return items;
  }
}
