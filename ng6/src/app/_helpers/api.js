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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ApiFactory = /** @class */ (function () {
    function ApiFactory(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8000';
    }
    ApiFactory.prototype.get = function (apiUrl) {
        return this.http.get(this.baseUrl + apiUrl, this.header())
            .map(function (response) {
            return response.json();
        });
    };
    ApiFactory.prototype.post = function (apiUrl, data, useToken) {
        if (data === void 0) { data = {}; }
        if (useToken === void 0) { useToken = true; }
        return this.http.post(this.baseUrl + apiUrl, JSON.stringify(data), this.header(useToken))
            .map(function (response) {
            return response.json();
        });
    };
    ApiFactory.prototype.patch = function (apiUrl, data) {
        if (data === void 0) { data = {}; }
        return this.http.patch(this.baseUrl + apiUrl, JSON.stringify(data), this.header())
            .map(function (response) {
            return response.json();
        });
    };
    ApiFactory.prototype.delete = function (apiUrl) {
        return this.http.delete(this.baseUrl + apiUrl, this.header())
            .map(function (response) {
            return response.json();
        });
    };
    ApiFactory.prototype.header = function (useToken) {
        if (useToken === void 0) { useToken = true; }
        var headerOptions = { 'Content-Type': 'application/json' };
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (useToken && currentUser && currentUser.token) {
            headerOptions['Authorization'] = 'Bearer ' + currentUser.token;
        }
        var headers = new http_1.Headers(headerOptions);
        return new http_1.RequestOptions({ headers: headers });
    };
    ApiFactory = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ApiFactory);
    return ApiFactory;
}());
exports.ApiFactory = ApiFactory;
//# sourceMappingURL=api.js.map