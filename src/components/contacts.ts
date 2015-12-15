import { Component, View} from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { ContactService } from '../services/contact-service';

let contactService = new ContactService();
@Component({
  selector: 'contacts-component',
  template: `Hi Uncle, it's {{ getServiceDate()  }}`,
  directives: [CORE_DIRECTIVES]
})
export class ContactsComponent {
  contactService: ContactService;
  constructor() {
    this.contactService = contactService;
    console.log('Routed to the contacts component');
    this.contactService = contactService;
  }
  getServiceDate() {
    return contactService.serviceDate;
  }
}
