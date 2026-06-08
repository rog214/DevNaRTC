import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ServicoTema } from '../../shared/services/servico-tema';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private readonly servicoTema = inject(ServicoTema);
  public readonly modoEscuroAtivo = this.servicoTema.temaEscuroAtivo;

  itensMenu = [
    { titulo: 'Introdução',          rota: 'home' },
    { titulo: 'Cadastros',           rota: 'impacto-cadastros' },
    { titulo: 'Cálculos "Por Fora"', rota: 'calculos' },
    { titulo: 'Leiautes DF-e',       rota: 'leiaute-dfes' },
    { titulo: 'Split Payment',       rota: 'split-payment' },
    { titulo: 'Leis Complementares', rota: 'leis-complementares' }
  ];

  alternarModoEscuro(): void {
    this.servicoTema.alternarTema();
  }
}
