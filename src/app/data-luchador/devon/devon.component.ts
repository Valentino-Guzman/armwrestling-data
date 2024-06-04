import { Component } from '@angular/core';
import { dataLuchador } from '../luchador';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-devon-larratt',
  standalone: true,
  imports: [NgFor],
  templateUrl: './devon.component.html',
  styleUrl: './devon.component.css'


})
export class DevonComponent {
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
