import { Component } from '@angular/core';
import { dataLuchador } from '../data-luchador/luchador';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-data-luchador',
  standalone: true,
  imports: [NgFor],
  templateUrl: './data-luchador.component.html',
  styleUrl: './data-luchador.component.css',


})
export class DataLuchadorComponent {
  title = 'public/mattttttt.png'
  devonLarratt: dataLuchador[] = [{
    Name: 'DEVON LARRATT',
    Country: 'Canada',
    Bicep: '48 cm',
    Forearm: '40.6 cm',
    Age: 49,
    Height: '196 cm',
    Weight: '124 kg'
  }]

}
