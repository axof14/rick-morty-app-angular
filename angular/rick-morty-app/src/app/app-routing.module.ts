import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '', redirectTo: 'home',
    pathMatch: 'full' 
  },
  
  {
    path: `home`,
    loadChildren: () => import('./pages/home-page/home.module').then(m => m.HomeModule)
  },
  {
    path: `list`,
    loadChildren: () => import('./pages/list-page/list.module').then(m => m.ListModule)

  },
  {
    path: `task`,
    loadChildren: () => import('./pages/task-page/task.module').then(m => m.TaskModule)

  },
  { 
    path: '**',
    component: NotFoundComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
