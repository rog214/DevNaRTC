import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App {
  title = 'DevNaRTC';

  constructor() {
    const scroller = inject(ViewportScroller);
    inject(Router).events.pipe(
      filter(evento => evento instanceof NavigationEnd)
    ).subscribe(() => {
      scroller.scrollToPosition([0, 0]);
    });
  }
}
