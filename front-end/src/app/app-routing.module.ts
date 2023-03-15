import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student/student-list',
    pathMatch: 'full'
  },
  {
    path: 'student',
    loadChildren: () => import('./components/student/student.module').then((m) => m.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
