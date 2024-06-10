import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dataLuchador } from '../../../interface/luchador';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-devon-larratt',
  standalone: true,
  imports: [NgFor],
  templateUrl: './devon.component.html',
  styleUrl: './devon.component.css'


})
export class DevonComponent {

  @Input() mostrarDatos: string = '';
  @Output() mostrarDatosClick = new EventEmitter<string>();


  mostrarDatosDev() {
    console.log('mensaje del padre al hijo: ', this.mostrarDatos)
    this.mostrarDatosClick.emit(this.mostrarDatos);
  }

  devonLarratt: dataLuchador[] = [{
    Name: 'DEVON LARRATT',
    Country: 'Canada',
    Bicep: '48 cm',
    Forearm: '40.6 cm',
    Age: '49',
    Height: '196 cm',
    Weight: '124 kg'
  }]

}
