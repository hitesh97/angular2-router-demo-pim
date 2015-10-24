import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { TaskService } from '../services/task-service';
import { Task } from '../datatypes/task';
import { Http } from 'angular2/http';
@Component({
  selector: 'tasks-component',
  template: `
    <ul>
      <li *ng-for="#task of tasks">
        {{ task.id }} - {{ task.description }}
      </li>
    </ul>
  `,
  bindings: [TaskService],
  directives: [CORE_DIRECTIVES]
})
export class TasksComponent {
  tasks: Array<Task>;
  constructor(public taskService: TaskService, public http: Http) {
    console.log('Routed to the task view');
    console.log('http is ', http);
    console.log('task service is ', taskService);
    /*taskService.getTasks()
      .subscribe()
      .map((tasks) => { this.tasks = tasks }); */
  }
}
