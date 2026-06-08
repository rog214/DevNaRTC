import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImpactoCadastros } from './pages/impacto-cadastros/impacto-cadastros';
import { ArquiteturaCalculos } from './pages/arquitetura-calculos/arquitetura-calculos';
import { LeiauteDfes } from './pages/leiaute-dfes/leiaute-dfes';
import { ArquiteturaSplit } from './pages/arquitetura-split/arquitetura-split';
import { LeisComplementaresComponent } from './pages/leis-complementares/leis-complementares.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'impacto-cadastros', component: ImpactoCadastros },
  { path: 'calculos', component: ArquiteturaCalculos },
  { path: 'leiaute-dfes', component: LeiauteDfes },
  { path: 'split-payment', component: ArquiteturaSplit },
  { path: 'leis-complementares', component: LeisComplementaresComponent }
];
