import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IAlumno } from '../models/alumno';
import { HttpClient } from '@angular/common/http';
import { Iprofesor } from '../models/profesor';
import { IGrado } from '../models/grado';
import { IAlumnoGrado } from '../models/alumnoGrado';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = 'https://localhost:7043/api/Alumno';
  private apiUrl2 = 'https://localhost:7043/api/Profesor';
  private apiUrl3 = 'https://localhost:7043/api/Grado';
  private apiUrl4 = 'https://localhost:7043/api/AlumnoGrado';
  constructor(private http:HttpClient ) { }

  obtenerAlumnoList():Observable<IAlumno[]>{
    console.log("paso por aca")
    return this.http.get<IAlumno[]>("https://localhost:7043/api/Alumno");
  }

  obtenerProfesores():Observable<Iprofesor[]>{
    console.log("paso por aca")
    return this.http.get<Iprofesor[]>("https://localhost:7043/api/Profesor");
  }

  obtenerGradoList():Observable<IGrado[]>{
    console.log("paso por aca")
    return this.http.get<IGrado[]>("https://localhost:7043/api/Grado");
  }

  obtenerAlumnoGradoList():Observable<IAlumnoGrado[]>{
    console.log("paso por aca")
    return this.http.get<IAlumnoGrado[]>("https://localhost:7043/api/AlumnoGrado");
  }



  crearAlumno(alumno: any): Observable<any> {
    console.log("service crear alumno");
    return this.http.post(this.apiUrl, alumno).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }

  crearProfesor(profesor: any): Observable<any> {
    console.log("service crear profesor");
    return this.http.post(this.apiUrl2, profesor).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }

  eliminarAlumno(id: string): Observable<any> {
    console.log(`Eliminando alumno con ID: ${id}`);
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de eliminación de alumno:', error);
        return throwError(error);
      })
    );
  }
  eliminarGrado(id: string): Observable<any> {
    console.log(`eliminado Grado con ID: ${id}`);
    return this.http.delete(`${this.apiUrl3}/${id}`).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de eliminación de alumno:', error);
        return throwError(error);
      })
    );
  }
  eliminarProfesor(id: string): Observable<any> {
    console.log(`Eliminando profesor con ID: ${id}`);
    return this.http.delete(`${this.apiUrl2}/${id}`).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de eliminación de profesor:', error);
        return throwError(error);
      })
    );
  }

  actualizarAlumno(id: number, alumno: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, alumno).pipe(
      catchError((error) => {
        console.error('Error al actualizar el alumno:', error);
        return throwError(error);
      })
    );
  }
  actualizarProfesor(id: number, profesor: any): Observable<any> {
    const url = `${this.apiUrl2}/${id}`;
    return this.http.put(url, profesor).pipe(
      catchError((error) => {
        console.error('Error al actualizar el alumno:', error);
        return throwError(error);
      })
    );
  }
}
