import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { liveQuery } from 'dexie';
import { db } from '../shared/db';
import { Mascota } from '../shared/mascotas.model';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
  listaMascotas = liveQuery(() => db.mascotas.toArray());
  mascotas : Mascota[] = [];
  /**
   *
   */
  constructor() {
    this.listaMascotas.subscribe(
      (mascota) => {
        this.mascotas = mascota;
        console.log(mascota)},
      (error) => {console.log(error)}
    );
  }
}
