import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  navItems = [
    { name: 'Home', routLink: 'Home', isSelected: false },
    { name: 'About', routLink: 'About', isSelected: false },
    { name: 'Services', routLink: 'Services', isSelected: false },
    { name: 'Contact', routLink: 'Contact', isSelected: false },
  ];

  constructor() {}
}
