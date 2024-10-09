import { alumnoResponse } from "./alumno";
import { alumnoGradoResponse } from "./alumnoGrado";
import { gradoResponse } from "./grado";
import { profesorResponse } from "./profesor";

export interface Accion<T = any> {
  accion: string;
  fila?: T
}
export const getEntityPropiedades = (entidad: string): Array<any> => {
  let resultados: any = [];
  let clase: any;
  console.log(entidad, clase)
  switch(entidad){
    case 'profesores':
      clase = new profesorResponse(); break;
    case 'alumnos':
      clase = new alumnoResponse(); break;
    case 'alumnoGrados':
      clase = new alumnoGradoResponse(); break;
    case 'grados':
      clase = new gradoResponse(); break;

  }

  if(clase){
    resultados = Object.keys(clase);
  }
  return resultados
}
