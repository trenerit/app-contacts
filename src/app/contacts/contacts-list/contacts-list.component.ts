import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  displayedColumns: string[] = ['lp', 'surname'];

  dataSource: ContactModel[] = [
    {id: 1, firstname: 'Anna', surname: 'Kowalska', phoneNumber: '+48 123456789', email: 'email1@example.com', city: 'Kraków'},
    {id: 2, firstname: 'Włodzimierz', surname: 'Nowak', phoneNumber: '123456785', email: 'email2@example.com', city: 'Kraków'},
    {id: 3, firstname: 'Piotr', surname: 'Nowakowski', phoneNumber: '123456784', email: 'emai3@example.com', city: 'Warszawa'},
    {id: 4, firstname: 'Monika', surname: 'Marcinek', phoneNumber: '123456783', email: 'emai4@example.com', city: 'Kraków'}
  ];

}
