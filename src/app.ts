//our root app component
import {bootstrap, Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_BINDINGS} from 'angular2/http';
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
        <a [router-link]="[ '/Tasks']">Tasks</a> |
        <a [router-link]="[ '/Contacts']">Contacts</a> |
        <a [router-link]="[ '/Calendar']">Calendar</a> |
        <a [router-link]="[ '/Messages']">Messages</a>
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

bootstrap(App, [HTTP_BINDINGS, ROUTER_BINDINGS, ContactService, TaskService])
  .catch(err => console.error(err));
