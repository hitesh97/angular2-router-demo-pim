import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { ContactService } from '../services/contact-service';

let contactService = new ContactService();
@Component({
  selector: 'contacts-component',
  template: `Hi Uncle, it's {{ serviceDate  }}`,
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
