import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

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
