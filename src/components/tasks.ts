import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

import { TaskService } from '../services/task-service';

@Component({
  selector: 'tasks-component',
  template: 'Hi Mom',
  directives: [CORE_DIRECTIVES],
  bindings: [TaskService]
})
export class TasksComponent {
  taskService: TaskService;
  constructor() {
    this.taskService = TaskService.getInstance();
    console.log('Routed to the task view');
  }

}
