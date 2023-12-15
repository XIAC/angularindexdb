import { Component } from '@angular/core';
import { ServicioTestService } from '../shared/servicio-test.service';
import { Persona } from '../shared/persona.model';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {
  persona : Persona = new Persona;
  constructor(public personaService : ServicioTestService) {
    this.persona = this.personaService.getInformacionPersona();
    console.log(this.persona);
  }
}
