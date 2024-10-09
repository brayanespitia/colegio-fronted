import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno-service';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {

  constructor(private alumnoService: AlumnoService) {}
  isOpen = false;
  formData = { name: 'botoncito' };


  variable = '';

  cargarDatos(alumno: any, id: string) {

    this.nombre = alumno.nombre;
    this.apellidos = alumno.apellidos;
    this.genero = alumno.genero;
    this.fecha = alumno.fechaNacimiento;
    this.id = id;
  }
  actualizarA: boolean = false;


  open(titulo: string) {
    this.variable = titulo;
    console.log(titulo,  "prueba actiulizar profesores")

    const modal = document.getElementById('crud-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  closeModal(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    const modal = document.getElementById('crud-modal');
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  }



  nombre: string = '';
  apellidos: string = '';
  genero: string = '';
  fecha: string = '';
  id: string= '';

  agregarDato() {
    console.log(this.variable);

    let nuevoDato = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      genero: this.genero,
      fechaNacimiento: this.fecha
    };


    switch (this.variable) {
      case 'alumnos':
        this.alumnoService.crearAlumno(nuevoDato).subscribe(
          (response) => {
            console.log('Alumno creado en la base de datos:', response);
          },
          (error) => {
            console.error('Error al guardar el alumno:', error);
          }
        );
        break;

      case 'profesores':
        this.alumnoService.crearProfesor(nuevoDato).subscribe(
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
  }
}
