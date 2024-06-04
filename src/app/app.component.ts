import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataLuchadorComponent } from './data-luchador/data-luchador.component';
import { MattComponent } from './matt/matt.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tarjeta-armwrestling',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DataLuchadorComponent, MattComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-armwrestling-data';
}
