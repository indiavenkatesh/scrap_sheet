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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, alertService, authService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.authService = authService;
        this.loading = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var currentUser = this.authService.getCurrentUser();
        if (currentUser) {
            this.user = currentUser.user;
        }
        else {
            this.alertService.error('You need to login!');
            this.router.navigate(['/login']);
        }
        this.roles = [
            { role: 0, title: 'Member' },
            { role: 1, title: 'Subscriber' },
            { role: 9, title: 'Administrator' },
        ];
    };
    ProfileComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.user).subscribe(function (data) {
            _this.authService.saveCurrentUser(_this.user);
            _this.alertService.success('User updated successfully!', true);
            _this.loading = false;
        }, function (error) {
            var message = error.json();
            _this.alertService.error(message.error);
            _this.loading = false;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
       
            templateUrl: 'profile.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            index_1.AlertService,
            index_1.AuthenticationService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map