import { Component } from '@angular/core';
import { ICard } from '../../interfaces/iCard';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  portfolioCard: ICard[] = [
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
    {
      img: '',
      title: 'this is project',
      link: '',
    },
  ];
}
