import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    this.handleScrolling();
  }

  private handleScrolling(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const targetElementId = location.hash.substring(1);
      const targetElement = document.getElementById(targetElementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
