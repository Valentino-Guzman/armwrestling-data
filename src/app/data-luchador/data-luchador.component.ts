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
  mostrarDatosDevon: string = 'Devon Larratt (born 24 April 1975) is a Canadian professional armwrestler, content creator, and a former member of the Canadian Armed Forces.Considered to be one of the best arm wrestlers in the world and as of the King Of The Table 7 event, the title holder of the best arm wrestler in North America, he has collaborated to popularize the sport to a wider audience.';
  mostrarDatosMatt: string = 'Mask is a 10-year veteran of the sport and is one of WALs most intense contenders. Mask has numerous WAL Regional Left and Right Hand Heavyweight titles to his name but is yet to take a Hammer at the WAL Championships, arguably it won’t be long until he does so. He has faced many of the sports legends, including John Brzenk and has proven he is one of the best in the business.';
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
