import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes:Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Frezzer',
    poder: 15000
  }

  /*get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }*/

  /*agregarNuevoPersonaje(arg: Personaje) {
    this.personajes.push(arg);
  }*/

  constructor(private dbzService: DbzService) {
    //this.personajes = this.dbzService.personajes;
  }
}
