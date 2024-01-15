import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
social = [
  {icon:'bi-linkedin'},
  {icon:'bi-github'},
  {icon:'bi-twitter'},
]
}
