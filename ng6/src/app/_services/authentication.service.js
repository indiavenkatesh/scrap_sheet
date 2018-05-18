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
require("rxjs/add/operator/map");
var index_1 = require("../_helpers/index");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(api) {
        this.api = api;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.api.post('/login', { email: email, password: password }, false)
            .map(function (response) {
            if (response && response.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthenticationService.prototype.saveCurrentUser = function (user) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.user = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    AuthenticationService.prototype.forgotPassword = function (email) {
        return this.api.post('/password/email', { email: email });
    };
    AuthenticationService.prototype.resetPassword = function (data) {
        return this.api.post('/password/reset', data);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.ApiFactory])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map