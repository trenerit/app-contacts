import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact-model';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})
export class ContactsListComponent {

  displayedColumns: string[] = ['lp', 'surname', 'firstname', 'city', 'action'];

  // dataSource: ContactModel[] = [
  //   {id: 1, firstname: 'Anna', surname: 'Kowalska', phoneNumber: '+48 123456789', email: 'email1@example.com', city: 'Kraków'},
  //   {id: 2, firstname: 'Włodzimierz', surname: 'Nowak', phoneNumber: '123456785', email: 'email2@example.com', city: 'Kraków'},
  //   {id: 3, firstname: 'Piotr', surname: 'Nowakowski', phoneNumber: '123456784', email: 'emai3@example.com', city: 'Warszawa'},
  //   {id: 4, firstname: 'Monika', surname: 'Marcinek', phoneNumber: '123456783', email: 'emai4@example.com', city: 'Kraków'}
  // ];
  dataSource: ContactModel[] = [];

  private sub = new Subscription;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(): void {
    const subLoadContacts = this.contactsService.getContacts().subscribe(dataFromSrv => {
      // console.log(dataFromSrv);
      this.dataSource = dataFromSrv;
    });
    this.sub.add(subLoadContacts);
  }

  delContact(idContact: number): void {
    const conf = confirm('Czy chcesz usunąć daną pozycję?');
    if(conf) {
      const subDelContact = this.contactsService.removeContact(idContact).subscribe(dataFromSrv => {
        // console.log(dataFromSrv);
        if(dataFromSrv.status === 'ok')
          this.loadContacts();
      });
      
      this.sub.add(subDelContact);

    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
