import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DevonComponent } from "./devon/devon.component";
import { MattComponent } from "./matt/matt.component";

@Component({
  selector: 'app-data-luchador',
  standalone: true,
  templateUrl: './data-luchador.component.html',
  styleUrl: './data-luchador.component.css',
  imports: [HeaderComponent, DevonComponent, MattComponent]
})
export class DataLuchadorComponent {
  mostrarDatosDevon: string = 'he start for shes grandma';
  mostrarDatosMatt: string = 'he start for shes grandmadsad';
  mensajeRecibidoDevon: string = '';
  mensajeRecibidoMatt: string = '';
  clicked: boolean = false;

  MostrarDesdeDevon(data: string) {
    this.mensajeRecibidoDevon = data;
    console.log('mensaje del hijo: ', data);
  }

  MostrarDesdeMatt(data: string) {
    this.mensajeRecibidoMatt = data;
    console.log('mensaje del hijo: ', data);
  }

}
