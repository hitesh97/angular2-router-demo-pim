var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent = __decorate([
        angular2_1.Component({
            selector: 'calendar-component',
            template: 'Hi Pop',
            directives: [angular2_1.CORE_DIRECTIVES]
        })
    ], CalendarComponent);
    return CalendarComponent;
})();
exports.CalendarComponent = CalendarComponent;
