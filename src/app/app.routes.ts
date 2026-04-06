import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/home/home').then((m) => m.Home),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('@pages/my-tasks/my-tasks').then((m) => m.MyTasks),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('@pages/contact-me/contact-me').then((m) => m.ContactMe),
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
  ],
});
