import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Accion } from '../../models/tabla-columna';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [ModalFormComponent,RouterOutlet,RouterModule],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {

  @ViewChild('modalForm') modalForm!: ModalFormComponent;

  title = '';
  columnas: string[] = [];
  dataSource: any = [];


  @Input() set titulo(title: any) {
    this.title = title;
  }

  @Input() set columns(columns: string[]) {
    this.columnas = columns;
  }

  @Input() set data(data: any) {
    this.dataSource = data;
  }
  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion: accion, fila: row });
  }


  isModalOpen = false;

  openModal() {

    console.log("modal desde tabla22", this.title)
    this.modalForm.open(this.title)

  }

  closeModal() {
    this.isModalOpen = false;
  }



}
