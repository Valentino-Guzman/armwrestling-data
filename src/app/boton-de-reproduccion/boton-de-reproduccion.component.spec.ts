import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeReproduccionComponent } from './boton-de-reproduccion.component';

describe('BotonDeReproduccionComponent', () => {
  let component: BotonDeReproduccionComponent;
  let fixture: ComponentFixture<BotonDeReproduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonDeReproduccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonDeReproduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
