import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoTema {
  private readonly temaEscuroAtivoSignal = signal<boolean>(false);
  public readonly temaEscuroAtivo = this.temaEscuroAtivoSignal.asReadonly();

  public alternarTema(): void {
    const novoEstado = !this.temaEscuroAtivoSignal();
    this.temaEscuroAtivoSignal.set(novoEstado);
    document.documentElement.classList.toggle('dark', novoEstado);
  }
}
