import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  data = [
    {id: 1, firstname: 'Anna', lastname: 'Kowalska', phoneNumber: '+48 123456789'},
    {id: 2, firstname: 'Włodzimierz', lastname: 'Nowak', phoneNumber: '123456785'},
    {id: 3, firstname: 'Piotr', lastname: 'Nowakowski', phoneNumber: '123456784'},
    {id: 4, firstname: 'Monika', lastname: 'Marcinek', phoneNumber: '123456783'}
  ];

}
