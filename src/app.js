var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//our root app component
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
// our routes
var tasks_1 = require('./components/tasks');
var contacts_1 = require('./components/contacts');
var calendar_1 = require('./components/calendar');
var messages_1 = require('./components/messages');
// our services
var task_service_1 = require('./services/task-service');
var contact_service_1 = require('./services/contact-service');
var App = (function () {
    function App() {
        //this.taskService = TaskService.getInstance();
        console.log('Routed to the task view');
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'pim-app',
            template: "\n    <div>\n      <h2>Let's work!</h2>\n      <div class=\"navigation\">\n        <a [router-link]=\"[ '/Tasks']\">Tasks</a> |\n        <a [router-link]=\"[ '/Contacts']\">Contacts</a> |\n        <a [router-link]=\"[ '/Calendar']\">Calendar</a> |\n        <a [router-link]=\"[ '/Messages']\">Messages</a>\n      </div>\n      <div class='route-container'>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: tasks_1.TasksComponent, as: 'Tasks' },
            { path: '/Tasks', component: tasks_1.TasksComponent, as: 'Tasks' },
            { path: '/Contacts', component: contacts_1.ContactsComponent, as: 'Contacts' },
            { path: '/Calendar', component: calendar_1.CalendarComponent, as: 'Calendar' },
            { path: '/Messages', component: messages_1.MessagesComponent, as: 'Messages' }
        ])
    ], App);
    return App;
})();
exports.App = App;
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.apply(this, arguments);
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    return AppBaseRequestOptions;
})(http_1.BaseRequestOptions);
angular2_1.bootstrap(App, [http_1.HTTP_PROVIDERS,
    angular2_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
    router_1.ROUTER_BINDINGS, contact_service_1.ContactService, task_service_1.TaskService])
    .catch(function (err) { return console.error(err); });
