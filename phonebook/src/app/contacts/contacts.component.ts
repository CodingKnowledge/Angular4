import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";

import { ContactsService } from './../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(private contactService: ContactsService, private dialog: MdDialog) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  add() {
    let dialogRef = this.dialog.open(AddContactDialog);
    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }

}

@Component({
  selector: 'add-contact-dialog',
  template: `
  <h1 md-dialog-title>Add Contact</h1>
  <md-input-container>
  <input mdInput #contactName placeholder="Contact name">
  </md-input-container>
  <md-input-container>
  <input mdInput #contactNumber placeholder="Contact number">
  </md-input-container>
  <button md-raised-button color="primary" (click)="dialogRef.close({
    name:contactName.value,
    number:contactNumber.value
    })">Save</button>
  <button md-raised-button (click)="dialogRef.close()">Close dialog</button>
  `
})
export class AddContactDialog {
  constructor(private dialogRef: MdDialogRef<AddContactDialog>) { }
}
