export class Task {
  static lastId = 0;
  id: number;
  description: string;
  priority: number;
  dueDate: Date;
  complete: boolean;
  completedDate: Date;
  constructor(id: number, description: string, priority: number, dueDate: Date, complete: boolean) {
    if (!id) {
      // TODO BLECH!!!
      Task.lastId = Task.lastId + 1;
      this.id = Task.lastId;
    } else {
      this.id = id;
    }

    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }
  setComplete() {
    this.complete = true;
    this.completedDate = new Date();
  }
  clearCompleteFlag() {
    this.complete = false;
    this.completedDate = null;
  }

}
