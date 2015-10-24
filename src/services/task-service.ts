import { Http, Response } from 'angular2/http';
import { Task } from '../datatypes/task';

export class TaskService {
  /*constructor(public http: Http) {
    console.log('Task Service created.', http);
  }
  getTasks() {
    // return an observable
    return this.http.get('/api/v1/tasks')
      .map( (responseData) => { return responseData.json() })
      .map((tasks: Array<any>) => {
        if (tasks) {
          let result:Array<Task> = [];
          tasks.forEach((task) => {
            result.push(new Task(task.id, task.description, task.dueDate, task.complete));
          });
          return result;
        }
      });
  }*/

}
