import { Http, Response, Request } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { Task } from '../datatypes/task';

// @Injectable() - normally for Dart but since we just have to have metadata
// on our object to make it inject Http into the constructor
// we use this annotation. We also could have done an
// @Inject(http) in the parameter as an alternative, but this
// is a bit drier and works for multiple constructor DI args.
// see http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
@Injectable()
export class TaskService {
  constructor(public http: Http) {
    console.log('Task Service created.', http);
  }
  getTasks() {
    // return an observable
    return this.http.get('/api/v1/tasks')
    .map( (responseData) => {
      return responseData.json();
    })
    .map((tasks: Array<any>) => {
      let result:Array<Task> = [];
      if (tasks) {
        tasks.forEach((task) => {
          result.push(new Task(task.id, task.description, task.priority, task.dueDate, task.complete));
        });
      }
      return result;
    });
  }

  addTask(description: string, priority: number, dueDate: Date) {
    console.log('adding task - start', description, priority, dueDate);
    var task = new Task(null, description, priority, dueDate, false);
    return this.http.put('/api/v1/tasks', JSON.stringify(task));
  }

  toggleComplete(task: Task) {
    if (task.complete !== true) {
      task.setComplete();
    } else {
      task.clearCompleteFlag();
    }
    console.log('completing task', task);

    return this.http.post('/api/v1/tasks', JSON.stringify(task));
  }
}
