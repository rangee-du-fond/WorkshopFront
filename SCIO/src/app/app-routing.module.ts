import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'request-details/:id',
    loadChildren: () => import('./pages/request-details/request-details.module').then( m => m.RequestDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'employee/:id',
    loadChildren: () => import('./pages/employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'meetings',
    loadChildren: () => import('./pages/meetings/meetings.module').then( m => m.MeetingsPageModule)
  },
  {
    path: 'request-creation/:id',
    loadChildren: () => import('./pages/request-creation/request-creation.module').then( m => m.RequestCreationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
