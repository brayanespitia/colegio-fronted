import { RouterModule, Routes } from '@angular/router';
//import { AlumnoComponent } from './pages/alumno/alumno.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  { path: 'alumno', loadComponent:() => import('./pages/alumno/alumno.component'),

  },
  { path: 'profesor',
     loadComponent:() => import('./pages/profesor/profesor.component').then(m => m.ProfesorComponent)

  },
  { path: 'grado',
    loadComponent:() => import('./pages/grado/grado.component'),

 },
 { path: 'alumnoGrado',
  loadComponent:() => import('./pages/alumno-grado/alumno-grado.component'),

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
