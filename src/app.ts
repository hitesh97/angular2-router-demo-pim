import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
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
        <a [routerLink]="['Tasks']">Tasks</a> |
        <a [routerLink]="['Contacts']">Contacts</a> |
        <a [routerLink]="['Calendar']">Calendar</a> |
        <a [routerLink]="['Messages']">Messages</a>
      </div>
      <div class='route-container'>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
  { path: '/', redirectTo: 'Tasks' },
  { path: '/tasks', name: 'Tasks', component: TasksComponent }/*,
  { path: '/contacts', name: 'Contacts', component: ContactsComponent },
  { path: '/calendar', name: 'Calendar', component: CalendarComponent },
  { path: '/messages', name: 'Messages', component: MessagesComponent }
  */
])
export class App {
  constructor() {

  }
}

/*class AppBaseRequestOptions extends BaseRequestOptions {
  headers : Headers = new Headers({
      'Content-Type' : 'application/json'
  })
  }*/

/*bootstrap(App, [ROUTER_PROVIDERS, bind(APP_BASE_HREF).toValue('/'),
  provide(RequestOptions, { useClass: AppBaseRequestOptions }),
  ContactService, TaskService])
  .catch(err => console.error(err));*/
