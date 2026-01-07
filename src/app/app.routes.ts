import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Sobre } from './core/sobre/sobre';
import { Projetos } from './core/projetos/projetos';
import { Contatos } from './core/contatos/contatos';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'sobre', component: Sobre},
  { path: 'projetos', component: Projetos },
  { path: 'contatos', component: Contatos},

  // fallback
  { path: '**', redirectTo: '' }
];
