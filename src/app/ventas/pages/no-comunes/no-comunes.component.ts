import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Jorge';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Lauras', 'Jorge', 'Antonia', 'Rosa'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Reeflejo';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Jorge',
    edad: 35,
    direccion: 'Valparaíso',
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];
}
