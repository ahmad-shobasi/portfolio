import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  navItems = [
    {name:'Home', routLink:'', isSelected: false},
    {name:'About', routLink:'', isSelected: false},
    {name:'Services', routLink:'', isSelected: false},
    {name:'contact', routLink:'', isSelected: false},
  ]
}
