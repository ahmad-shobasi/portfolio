import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  FormGroups = [
    { type: 'text', name: 'name', label: 'Full Name' },
    { type: 'email', name: 'email', label: 'Email Address' },
    { type: 'number', name: 'number', label: 'Mobile Number' },
    { type: 'text', name: 'text', label: 'Email subject' },
  ];

  submitFormMessage($event: any) {
    $event.preventDefault();
    console.log($event);
  }
}
