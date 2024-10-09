import { Component, OnInit } from '@angular/core';
import { IGrado } from '../../models/grado';
import { AlumnoService } from '../../services/alumno-service';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { TableDataComponent } from '../../components/table-data/table-data.component';
import { IAlumno } from '../../models/alumno';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-grado',
  standalone: true,
  imports: [TableDataComponent,HttpClientModule],
  templateUrl: './grado.component.html',
  styleUrl: './grado.component.css',
  providers:[
    AlumnoService
  ]
})
export default class GradoComponent implements OnInit {

  constructor(private alumnoService: AlumnoService) {}

  gradoLista:IGrado[]=[];
  columnas: string[] = [];
  title:string = 'grados';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('grados');
    console.log(this.columnas)

    this.alumnoService.obtenerGradoList().subscribe(data=>{
      console.log(data)
      this.gradoLista = data;
      console.log(this.gradoLista);

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

 }

 eliminar(id:string){
   this.alumnoService.eliminarGrado(id).subscribe(data =>{

   }, error => {
     console.error('Error al crear el alumno:', error);
   });
   console.log("eliminar",id)
 }

}
