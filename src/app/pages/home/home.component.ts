import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  exibirBotaoTopo = false;

  readonly impostosExtintos = ['PIS', 'COFINS', 'IPI', 'ICMS', 'ISS'];

  readonly cards = [
    {
      rota: 'impacto-cadastros',
      label: 'Cadastros',
      titulo: 'Impacto nos Cadastros',
      descricao: 'Como modelar emitentes, clientes e produtos para o regime híbrido.',
      destaque: false
    },
    {
      rota: 'calculos',
      label: 'Cálculos',
      titulo: 'Motor de Cálculo "Por Fora"',
      descricao: 'Arredondamento item a item, descontos incondicionais e Split Payment no DTO.',
      destaque: false
    },
    {
      rota: 'leiaute-dfes',
      label: 'Leiautes DF-e',
      titulo: 'NF-e no Período Híbrido',
      descricao: 'DTO bivalente com tributos legados e IVA-Dual no mesmo XML.',
      destaque: false
    },
    {
      rota: 'split-payment',
      label: 'Split Payment',
      titulo: 'Retenção em Tempo Real',
      descricao: 'Como IBS e CBS são retidos direto no gateway antes de chegar ao lojista.',
      destaque: false
    },
    {
      rota: 'leis-complementares',
      label: 'Leis Complementares',
      titulo: 'LC 214/2023 na Prática',
      descricao: 'Cronograma, regimes de redução (30%, 60%, isenção) e cashback automático.',
      destaque: true
    }
  ];

  @HostListener('window:scroll', [])
  aoRolar(): void {
    this.exibirBotaoTopo = window.scrollY > 400;
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
