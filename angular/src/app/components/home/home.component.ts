import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  social = [
    { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/ahmad-shobasi-7a0547243/' },
    { icon: 'bi-github', href: 'https://github.com/ahmad-shobasi' },
    { icon: 'bi-twitter', href: '' },
  ];
}
