import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { ModalFormComponent } from '../../components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno-service';
import { Iprofesor } from '../../models/profesor';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { HttpClientModule } from '@angular/common/http';
import { ModalFormActualizarComponent } from '../../components/modal-form-actualizar/modal-form-actualizar.component';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [TableDataComponent,ModalFormComponent,FormsModule,HttpClientModule,ModalFormActualizarComponent],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css',
  providers:[
    AlumnoService
  ]
})
export class ProfesorComponent implements OnInit {
  constructor(private alumnoService: AlumnoService) {}

  @ViewChild(ModalFormComponent) modalForm!: ModalFormComponent;
  @ViewChild('modalActualizar', { static: false }) modalFormActualizar!: ModalFormActualizarComponent;

  profesorLista:Iprofesor[]=[];
  columnas: string[] = [];

  title:string = 'profesores';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('profesores');
    console.log(this.columnas)

    this.alumnoService.obtenerProfesores().subscribe(data=>{
      console.log(data)
      this.profesorLista = data;
      console.log(this.profesorLista);

    });


  }
  onAction(accion: Accion) {
    if (accion.accion == 'Editar') {
     this.editar(accion.fila)
   } else if (accion.accion == 'Eliminar') {
     this.eliminar(accion.fila.id)
   }
 }

 editar(objeto:any){
  this.modalFormActualizar.open('profesores', objeto.id);
 }

 eliminar(id:string){
  console.log("eliminar",id)
  this.alumnoService.eliminarProfesor(id).subscribe(data =>{

  }, error => {
    console.error('Error al crear el alumno:', error);
  });

}

 agregarProfesor(nuevoProfesor: any) {
  this.alumnoService.crearProfesor(nuevoProfesor).subscribe(data => {
    console.log('Profesor creado:', data);
    this.profesorLista.push(data);
  }, error => {
    console.error('Error al crear el profesor:', error);
  });
}
openModal() {
  console.log("se fue por aca", this.title)
  this.modalForm.open(this.title);

}


}
