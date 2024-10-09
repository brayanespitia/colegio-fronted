import { Component } from '@angular/core';
import { Accion, getEntityPropiedades } from '../../models/tabla-columna';
import { AlumnoService } from '../../services/alumno-service';
import { IAlumnoGrado } from '../../models/alumnoGrado';
import { HttpClientModule } from '@angular/common/http';
import { TableDataComponent } from '../../components/table-data/table-data.component';

@Component({
  selector: 'app-alumno-grado',
  standalone: true,
  imports: [TableDataComponent,HttpClientModule],
  templateUrl: './alumno-grado.component.html',
  styleUrl: './alumno-grado.component.css',
  providers:[
    AlumnoService
  ]
})
export default class AlumnoGradoComponent {

  constructor(private alumnoService: AlumnoService) {}

  alumnoGradoLista:IAlumnoGrado[]=[];
  columnas: string[] = [];
  title:string = 'alumnoGrados';

  ngOnInit(): void {
    this.columnas = getEntityPropiedades('alumnoGrados');
    console.log(this.columnas)

    this.alumnoService.obtenerAlumnoGradoList().subscribe(data=>{
      console.log(data)
      this.alumnoGradoLista = data;
      console.log(this.alumnoGradoLista);

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
