import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno-service';

@Component({
  selector: 'app-modal-form-actualizar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-form-actualizar.component.html',
  styleUrl: './modal-form-actualizar.component.css'
})
export class ModalFormActualizarComponent {

  constructor(private alumnoService: AlumnoService) {}
  isOpen = false;
  formData = { name: 'botoncito' };


  variable = '';

  cargarDatos(alumno: any, id: number) {

    this.nombre = alumno.nombre;
    this.apellidos = alumno.apellidos;
    this.genero = alumno.genero;
    this.fecha = alumno.fechaNacimiento;
    this.id = id;
  }





  open(titulo: string, id:number) {
    this.variable = titulo;
    this.id=id;
    console.log("actualizando nuevo modal")

    const modal = document.getElementById('crud-modal2');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  closeModal(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    const modal = document.getElementById('crud-modal2');
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  }



  nombre: string = '';
  apellidos: string = '';
  genero: string = '';
  fecha: string = '';
  id: number= 0;

  agregarDato() {
    console.log(this.variable);
    let nuevoDato = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      genero: this.genero,
      fechaNacimiento: this.fecha,
      id: this.id
    };

    switch (this.variable) {
      case 'alumnos':
        this.alumnoService.actualizarAlumno(this.id, nuevoDato).subscribe(
          (response) => {
            console.log('Alumno actualizado con éxito:', response);
            this.closeModal();
          },
          (error) => {
            console.error('Error al actualizar el alumno:', error);
          }
        );
        break;

      case 'profesores':
        this.alumnoService.actualizarProfesor(this.id,nuevoDato).subscribe(
          (response) => {
            console.log('Profesor creado en la base de datos:', response);
          },
          (error) => {
            console.error('Error al guardar el profesor:', error);
          }
        );
        break;

      default:
        console.error('Tipo no reconocido:', this.variable);
        break;
    }

    console.log("Se envió el post");
    this.closeModal();
    return;
  }
}
