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
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, route, authService, alertService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.route.params
            .map(function (params) { return params['token']; })
            .subscribe(function (token) {
            _this.model.token = token;
        });
    };
    ResetPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.model.match = this.model.password == this.model.password_confirmation;
        if (this.model.match) {
            this.loading = true;
            this.authService.resetPassword(this.model).subscribe(function (data) {
                _this.alertService.success('Password has been reset successful', true);
                _this.loading = false;
            }, function (error) {
                var message = error.json();
                _this.alertService.error(message.error);
                _this.loading = false;
            });
        }
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
       
            templateUrl: 'reset.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset.component.js.map