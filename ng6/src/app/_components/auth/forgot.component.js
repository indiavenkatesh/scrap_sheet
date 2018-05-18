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
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, authService, alertService) {
        this.router = router;
        this.authService = authService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    ForgotPasswordComponent.prototype.send = function () {
        var _this = this;
        this.loading = true;
        this.authService.forgotPassword(this.model.email).subscribe(function (data) {
            if (data.success) {
                _this.alertService.success('Request sent successful', true);
            }
            else {
                _this.alertService.error('Email does not exist');
            }
            _this.loading = false;
        }, function (error) {
            var message = error.json();
            _this.alertService.error(message.error);
            _this.loading = false;
        });
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
       
            templateUrl: 'forgot.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot.component.js.map