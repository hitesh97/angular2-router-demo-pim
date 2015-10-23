import { Injectable } from 'angular2/angular2';

export class TaskService {
  static isCreating: boolean;
  private TaskService() {
    throw "Cannot instantiate";
  }

  private static instance: TaskService;

  static getInstance() {
    if (!TaskService.instance) {
      // is this trip really necessary? This would
      // ALWAYS be synchronous, right?
      TaskService.isCreating = true;
      TaskService.instance = new TaskService();
      TaskService.isCreating = false;
    }

    console.log('You want me again???');
    return this.instance;
  }

  constructor() {
    if (!TaskService.isCreating) {
      throw new Error("You cannot create a singleton with a standard constructor call. Try TaskService.getInstance() instead");
    }
    console.log('I am ALIIIVE!');
  }
}
