import { Component, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { TaskService } from '../services/task-service';
import { Task } from '../datatypes/task';
@Component({
  selector: 'tasks-component',
  providers: [TaskService],
  template: `
  <form #f="form"
    (submit)="save(f.value)">
      <input type="text" name="description"
             ng-control="description">
      <select ng-control="priority">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
      </select>
      <input type="date" name="dueDate"
              ng-control="dueDate">
      <button type="submit">Save</button>
    </form>

    <ul>
      <li *ng-for="#task of tasks">
        <input type="checkbox"
           ng-input="task.complete"
           (check)="completeTask(task)"> {{ task.description }} - Priority {{ task.priority }}- due @ {{ task.dueDate }}
      </li>
    </ul>
  `,
  bindings: [TaskService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TasksComponent {
  tasks: Array<Task>;
  constructor(public taskService: TaskService) {
    console.log('Routed to the task view');
    console.log('task service is ', taskService);
    this.refreshTasks();
  }
  refreshTasks() {
    this.taskService.getTasks()
      .subscribe(res => this.tasks = res);
  }
  save(task) {
    console.log('submitted', task);
    var result = this.taskService.addTask(task.description, task.priority, task.dueDate);
    result.subscribe(() => this.refreshTasks());
  }

}
