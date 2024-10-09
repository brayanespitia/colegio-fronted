import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormActualizarComponent } from './modal-form-actualizar.component';

describe('ModalFormActualizarComponent', () => {
  let component: ModalFormActualizarComponent;
  let fixture: ComponentFixture<ModalFormActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormActualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
