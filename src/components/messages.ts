import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

import { TaskService } from '../services/task-service';
@Component({
  selector: 'messages-component',
  template: `Hi Dad`,
  directives: [CORE_DIRECTIVES],
  bindings: [TaskService]
})
export class MessagesComponent { 
  constructor() {
    // hand-created singleton
    
    console.log('Routed to the messages view');
  }
}