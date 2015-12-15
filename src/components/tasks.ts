import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { TaskService } from '../services/task-service';
import { Task } from '../datatypes/task';
@Component({
  selector: 'tasks-component',
  providers: [TaskService],
  template: `
  THIS IS THE TASK VIEW
  <form #f="form"
    (submit)="save(f.value)">
      <input type="text" name="description"
             ngControl="description">
      <select ngControl="priority">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
      </select>
      <input type="date" name="dueDate"
              ngControl="dueDate">
      <button type="submit">Save</button>
    </form>

    <ul>
      <li *ngFor="#task of tasks">
        <input type="checkbox"
           ngInput="task.complete"
           (click)="toggleComplete(this, task)"> {{ task.description }} - Priority {{ task.priority }}- due @ {{ task.dueDate }}
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
  toggleComplete(comp, task) {
    console.log(comp);
    console.log('toggle complete',  task);
    var result = this.taskService.toggleComplete(task);
    result.subscribe(() => this.refreshTasks()); 
  }

}
