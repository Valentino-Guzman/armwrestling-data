import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DevonComponent } from './data-luchador/devon/devon.component';
import { MattComponent } from './data-luchador/matt/matt.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tarjeta-armwrestling',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DevonComponent, MattComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-armwrestling-data';
}
