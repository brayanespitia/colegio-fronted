import { Component, OnInit, ViewChild } from '@angular/core';
import { AlumnoService } from '../../services/alumno-service';
import { IAlumno } from '../../models/alumno';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { HttpClientModule } from '@angular/common/http';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { ModalFormComponent } from '../../components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { ModalFormActualizarComponent } from '../../components/modal-form-actualizar/modal-form-actualizar.component';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [TableDataComponent,HttpClientModule,ModalFormComponent,FormsModule,ModalFormActualizarComponent],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
  providers:[
    AlumnoService
  ]
})
export default class AlumnoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) {}

  @ViewChild('modalForm', { static: false }) modalForm!: ModalFormComponent;
  @ViewChild('modalActualizar', { static: false }) modalFormActualizar!: ModalFormActualizarComponent;

  ngAfterViewInit() {

  }

  alumnoLista:IAlumno[]=[];
  columnas: string[] = [];

  title:string = 'alumnos';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('alumnos');
    console.log(this.columnas)

    this.alumnoService.obtenerAlumnoList().subscribe(data=>{
      console.log(data)
      this.alumnoLista = data;
      console.log(this.alumnoLista);

    });


  }
  onAlumnoCreado(nuevoAlumno: any) {
    console.log('Nuevo alumno recibido en AlumnoComponent:', nuevoAlumno);
    this.alumnoService.crearAlumno(nuevoAlumno).subscribe(data => {
      console.log('Alumno creado:', data);
    }, error => {
      console.error('Error al crear el alumno:', error);
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
    console.log("editar nuevo", objeto)
    this.modalFormActualizar.open('alumnos', objeto.id);
  }

  eliminar(id:string){
    this.alumnoService.eliminarAlumno(id).subscribe(data =>{

    }, error => {
      console.error('Error al crear el alumno:', error);
    });
    console.log("eliminar",id)
  }
 openModal() {

    console.log("modal desde tabla2", this.title)
    this.modalForm.open('alumnos');
  }
}
