import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataLuchadorComponent } from './data-luchador.component';

describe('DataLuchadorComponent', () => {
  let component: DataLuchadorComponent;
  let fixture: ComponentFixture<DataLuchadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLuchadorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataLuchadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
