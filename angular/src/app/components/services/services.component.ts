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
      img: './assets/ultra_nature_wallpaper_4k_hd.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/a-random-lake-holiday-nature-beautiful.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/pngtree-an-open-stream-running-through-a-forest-covered-in-grass-and-image_2935355.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/ultra_nature_wallpaper_4k_hd.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/a-random-lake-holiday-nature-beautiful.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/pngtree-an-open-stream-running-through-a-forest-covered-in-grass-and-image_2935355.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/ultra_nature_wallpaper_4k_hd.jpg',
      title: 'this is project',
      link: '',
    },
    {
      img: './assets/a-random-lake-holiday-nature-beautiful.jpg',
      title: 'this is project',
      link: '',
    },
  ];
}
