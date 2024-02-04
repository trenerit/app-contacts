import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent {

  private sub = new Subscription;

  contactDetails: any = {};

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    const idContact = this.route.snapshot.params['id'];
    const subGetContact = this.contactsService.getContact(idContact).subscribe(dataFromSrv => {
      const [ data ] = dataFromSrv;
      this.contactDetails = data;
    });
  }

}
