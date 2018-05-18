"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, userService, authService, alertService) {
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.alertService = alertService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this user?')) {
            this.userService.delete(id).subscribe(function () { _this.load(); });
        }
    };
    UserListComponent.prototype.load = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users.map(function (user) {
                user.title = _this.getRole(user.role);
                return user;
            });
        }, function (error) {
            var message = error.json();
            _this.alertService.error(message.error);
        });
    };
    UserListComponent.prototype.getRole = function (role) {
        switch (role) {
            case 0: return 'Member';
            case 1: return 'Subscriber';
            case 9: return 'Administrator';
            default: return '';
        }
    };
    UserListComponent = __decorate([
        core_1.Component({
       
            templateUrl: 'list.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=list.component.js.map