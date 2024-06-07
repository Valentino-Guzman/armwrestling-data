import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DevonComponent } from './data-luchador/devon/devon.component';
import { MattComponent } from './data-luchador/matt/matt.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'tarjeta-armwrestling',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule, DevonComponent, MattComponent, NgFor, HeaderComponent]
})
export class AppComponent {


}
