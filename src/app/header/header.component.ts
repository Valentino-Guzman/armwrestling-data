import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataLuchador } from '../data-luchador/luchador';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() devonLarratt!: dataLuchador[];
  @Input() mattMask!: dataLuchador[];
  searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  onSearch() {
    this.searchTermChange.emit(this.searchTerm);
  }
}
