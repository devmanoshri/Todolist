import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'prctice',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent)
        }
    },
    {
        path: '',
        loadComponent: () => {
            return import('./todos/todos.component').then(m => m.TodosComponent)
        }
    }
];
