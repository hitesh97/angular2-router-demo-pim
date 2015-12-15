import {provide, Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_BINDINGS, HTTP_PROVIDERS, Headers, RequestOptions, BaseRequestOptions} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

// our routes
import { TasksComponent } from './components/tasks';
import { ContactsComponent } from './components/contacts';
import { CalendarComponent } from './components/calendar';
import { MessagesComponent } from './components/messages';


// our services
import { TaskService } from './services/task-service';
import { ContactService } from './services/contact-service';

@Component({
  selector: 'pim-app',
  template: `
    <div>
      <h2>Let's work!</h2>
      <div class="navigation">
        <a [routerLink]="[ '/Tasks']">Tasks</a> |
        <a [routerLink]="[ '/Contacts']">Contacts</a> |
        <a [routerLink]="[ '/Calendar']">Calendar</a> |
        <a [routerLink]="[ '/Messages']">Messages</a>
      </div>
      <div class='route-container'>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: TasksComponent, as: 'Tasks' },
  { path: '/Tasks', component: TasksComponent, as: 'Tasks' },
  { path: '/Contacts', component: ContactsComponent, as: 'Contacts' },
  { path: '/Calendar', component: CalendarComponent, as: 'Calendar' },
  { path: '/Messages', component: MessagesComponent, as: 'Messages' }
])
export class App {
  constructor() {
    //this.taskService = TaskService.getInstance();
    console.log('Routed to the task view');
  }
}

class AppBaseRequestOptions extends BaseRequestOptions {
  headers : Headers = new Headers({
      'Content-Type' : 'application/json'
  })
}

bootstrap(App, [HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: AppBaseRequestOptions }),
  ROUTER_BINDINGS, ContactService, TaskService])
  .catch(err => console.error(err));
