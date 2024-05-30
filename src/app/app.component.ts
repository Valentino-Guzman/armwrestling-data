import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonDeReproduccionComponent } from './boton-de-reproduccion/boton-de-reproduccion.component';

@Component({
  selector: 'tarjeta-armwrestling',
  standalone: true,
  imports: [RouterOutlet, BotonDeReproduccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-armwrestling-data';
}
