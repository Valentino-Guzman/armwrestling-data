import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataLuchadorComponent } from "./data-luchador/data-luchador.component";


@Component({
  selector: 'tarjeta-armwrestling',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, DataLuchadorComponent]
})
export class AppComponent {


}
