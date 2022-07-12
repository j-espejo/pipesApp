import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'jorgE';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'jorgE Espejo';

  fecha: Date = new Date(); //dia hoy
}
