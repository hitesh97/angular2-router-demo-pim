var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
// normally this would be imported from 'angular2/core'
// but in our compiler we're pulling the dev version of angular2
var angular2_1 = require('angular2/angular2');
var task_1 = require('../datatypes/task');
// @Injectable() - normally for Dart but since we just have to have metadata
// on our object to make it inject Http into the constructor
// we use this annotation. We also could have done an
// @Inject(http) in the parameter as an alternative, but this
// is a bit drier and works for multiple constructor DI args.
// see http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task Service created.', http);
    }
    TaskService.prototype.getTasks = function () {
        // return an observable
        return this.http.get('/api/v1/tasks')
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (tasks) {
            var result = [];
            if (tasks) {
                tasks.forEach(function (task) {
                    result.push(new task_1.Task(task.id, task.description, task.priority, task.dueDate, task.complete));
                });
            }
            return result;
        });
    };
    TaskService.prototype.addTask = function (description, priority, dueDate) {
        console.log('adding task - start', description, priority, dueDate);
        var task = new task_1.Task(null, description, priority, dueDate, false);
        return this.http.put('/api/v1/tasks', JSON.stringify(task));
    };
    TaskService.prototype.toggleComplete = function (task) {
        if (task.complete !== true) {
            task.setComplete();
        }
        else {
            task.clearCompleteFlag();
        }
        console.log('completing task', task);
        return this.http.post('/api/v1/tasks', JSON.stringify(task));
    };
    TaskService = __decorate([
        angular2_1.Injectable()
    ], TaskService);
    return TaskService;
})();
exports.TaskService = TaskService;
