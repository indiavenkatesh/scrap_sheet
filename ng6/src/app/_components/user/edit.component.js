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
var index_1 = require("../../_models/index");
var index_2 = require("../../_services/index");
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(router, route, userService, alertService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.user = new index_1.User();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (userId) {
            _this.userId = userId;
            if (userId > 0) {
                _this.userService.getById(userId).subscribe(function (response) {
                    _this.user = response;
                });
            }
        });
        this.roles = [
            { role: 0, title: 'Member' },
            { role: 1, title: 'Subscriber' },
            { role: 9, title: 'Administrator' },
        ];
    };
    UserEditComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        if (this.userId > 0) {
            this.userService.update(this.user)
                .subscribe(function (data) {
                _this.alertService.success('User updated successfully!', true);
                _this.router.navigate(['/users']);
            }, function (error) {
                var message = error.json();
                _this.alertService.error(message.error);
                _this.loading = false;
            });
        }
        else {
            this.userService.create(this.user)
                .subscribe(function (data) {
                _this.alertService.success('User added successfully!', true);
                _this.router.navigate(['/users']);
            }, function (error) {
                var message = error.json();
                _this.alertService.error(message.error);
                _this.loading = false;
            });
        }
    };
    UserEditComponent = __decorate([
        core_1.Component({
       
            templateUrl: 'edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            index_2.UserService,
            index_2.AlertService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=edit.component.js.map