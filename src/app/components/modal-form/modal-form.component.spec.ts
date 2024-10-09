import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormComponent } from './modal-form.component';
import { FormsModule } from '@angular/forms';

describe('ModalFormComponent', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormComponent,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
