import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { dataLuchador } from '../data-luchador/luchador';

@Component({
  selector: 'app-matt',
  standalone: true,
  imports: [NgFor],
  templateUrl: './matt.component.html',
  styleUrl: './matt.component.css'
})
export class MattComponent {
  mattMask: dataLuchador[] = [{
    Name: 'MATT MASK',
    Country: 'Canada',
    Bicep: '43 cm',
    Forearm: '42 cm',
    Age: 42,
    Height: '196 cm',
    Weight: '114 kg'
  }]
}
