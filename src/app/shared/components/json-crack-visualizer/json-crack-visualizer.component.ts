import { Component, Input, AfterViewInit, OnDestroy, ElementRef, inject, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-json-crack-visualizer',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full h-[540px] rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <iframe id="jsoncrack-frame"
              [src]="urlWidget"
              width="100%"
              height="100%"
              style="border:none;">
      </iframe>
    </div>
  `
})
export class JsonCrackVisualizerComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() dados: unknown;

  readonly urlWidget: SafeResourceUrl;

  private readonly hostEl = inject(ElementRef);
  private readonly sanitizador = inject(DomSanitizer);
  private widgetPronto = false;
  private escutadorMensagem?: (evento: MessageEvent) => void;
  private escutadorCarregamento?: () => void;
  private timerInstancia?: ReturnType<typeof setTimeout>;

  constructor() {
    this.urlWidget = this.sanitizador.bypassSecurityTrustResourceUrl('https://jsoncrack.com/widget');
  }

  ngAfterViewInit(): void {
    const iframe = this.hostEl.nativeElement.querySelector('iframe') as HTMLIFrameElement;
    if (!iframe) return;

    this.escutadorMensagem = (evento: MessageEvent) => {
      if (evento.data === 'jsoncrack-frame') {
        this.widgetPronto = true;
        this.enviarDados(iframe);
      }
    };

    window.addEventListener('message', this.escutadorMensagem);

    this.escutadorCarregamento = () => {
      if (this.timerInstancia) clearTimeout(this.timerInstancia);
      this.timerInstancia = setTimeout(() => {
        if (!this.widgetPronto) {
          this.enviarDados(iframe);
        }
      }, 800);
    };

    iframe.addEventListener('load', this.escutadorCarregamento);
  }

  ngOnChanges(mudancas: SimpleChanges): void {
    if (mudancas['dados'] && !mudancas['dados'].firstChange) {
      const iframe = this.hostEl.nativeElement.querySelector('iframe') as HTMLIFrameElement;
      if (iframe) {
        this.enviarDados(iframe);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.timerInstancia) clearTimeout(this.timerInstancia);

    if (this.escutadorMensagem) {
      window.removeEventListener('message', this.escutadorMensagem);
    }

    const iframe = this.hostEl.nativeElement.querySelector('iframe') as HTMLIFrameElement;
    if (iframe && this.escutadorCarregamento) {
      iframe.removeEventListener('load', this.escutadorCarregamento);
    }
  }

  private enviarDados(iframe: HTMLIFrameElement): void {
    if (!this.dados) return;
    try {
      const json = JSON.stringify(this.dados);
      const options = {
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
        direction: 'RIGHT'
      };
      iframe.contentWindow?.postMessage({ json, options }, '*');
    } catch (erro) {
      console.error('JsonCrack: falha ao enviar dados para o widget.', erro);
    }
  }
}
