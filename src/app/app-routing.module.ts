import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'rest-password',
    loadChildren: () => import('./pages/rest-password/rest-password.module').then( m => m.RestPasswordPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./pages/home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./pages/home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'home4',
    loadChildren: () => import('./pages/home4/home4.module').then( m => m.Home4PageModule)
  },
  {
    path: 'home6',
    loadChildren: () => import('./pages/home6/home6.module').then( m => m.Home6PageModule)
  },
  {
    path: 'home5',
    loadChildren: () => import('./pages/home5/home5.module').then( m => m.Home5PageModule)
  },
  {
    path: 'home7',
    loadChildren: () => import('./pages/home7/home7.module').then( m => m.Home7PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
