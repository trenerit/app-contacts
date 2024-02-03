import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
