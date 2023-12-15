import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioTestService {

  constructor() { }

  getInformacionPersona(){
    let persona = new Persona;
    persona.Id = 5;
    persona.Nombre = 'Mariela';
    persona.Apellido = 'Aguilar';
    return persona;
  }
}
