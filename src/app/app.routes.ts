import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { MyTasks } from './pages/my-tasks/my-tasks';
import { ContactMe } from './pages/contact-me/contact-me';
import { Home } from '@pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'tasks', component: MyTasks },
  { path: 'contact', component: ContactMe },
  { path: '**', redirectTo: '' }
];
