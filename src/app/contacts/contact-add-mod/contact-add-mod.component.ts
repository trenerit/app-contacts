import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'app-contact-add-mod',
  templateUrl: './contact-add-mod.component.html',
  styleUrl: './contact-add-mod.component.scss'
})
export class ContactAddModComponent {

  private sub = new Subscription;

  showAdd = false;
  showMod = false;

  addModForm: any;

  contactId!: number;

  constructor(
    public dialogRef: MatDialogRef<ContactsListComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: any,
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
   
    this.buildReactiveForm();

    if(this.dataModal.idContact) {
      this.showMod = true;
      this.contactId = this.dataModal.idContact;
      this.getContact();
    } else {
      this.showAdd = true; 
    }
  }

  buildReactiveForm(): void {

    const surnamePattern = '^[A-ż]{3,30}$';

    this.addModForm = this.fb.group({
      surname: ['', [Validators.required, Validators.pattern(surnamePattern)]],
      firstname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required]
    });
  }

  addContact(): void {
    const subAddContact = this.contactsService.addContact(this.addModForm.value).subscribe(dataFromSrv => {
      this.dialogRef.close({reload: 1});
    });
    this.sub.add(subAddContact);
  }

  getContact(): void {
    const subGetContact = this.contactsService.getContact(this.contactId).subscribe(dataFromSrv => {
      
      const [data] = dataFromSrv;

      this.addModForm.patchValue({
        surname: data.surname,
        firstname: data.firstname,
        phoneNumber: data.phoneNumber,
        email: data.email,
        city: data.city
      });

    });
    this.sub.add(subGetContact);
  }

  modContact(): void {
    const subModContact = this.contactsService.modContact(this.contactId, this.addModForm.value).subscribe(dataFromSrv => {
      this.dialogRef.close({reload: 1});
    });
    this.sub.add(subModContact);
  }

  closeModal() {
    this.dialogRef.close({reload: 0});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
