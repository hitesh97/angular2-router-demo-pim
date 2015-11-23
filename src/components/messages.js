var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var task_service_1 = require('../services/task-service');
var MessagesComponent = (function () {
    function MessagesComponent() {
        // hand-created singleton
        console.log('Routed to the messages view');
    }
    MessagesComponent = __decorate([
        angular2_1.Component({
            selector: 'messages-component',
            template: "Hi Dad",
            directives: [angular2_1.CORE_DIRECTIVES],
            bindings: [task_service_1.TaskService]
        })
    ], MessagesComponent);
    return MessagesComponent;
})();
exports.MessagesComponent = MessagesComponent;
