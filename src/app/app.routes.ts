import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { MyTasks } from './pages/my-tasks/my-tasks';
import { ContactMe } from './pages/contact-me/contact-me';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'tasks', component: MyTasks },
  { path: 'contact', component: ContactMe },
];
