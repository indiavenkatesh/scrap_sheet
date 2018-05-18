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
var index_1 = require("../_helpers/index");
var CustomerService = /** @class */ (function () {
    function CustomerService(api) {
        this.api = api;
    }
    CustomerService.prototype.getAll = function () {
        return this.api.get('/customers');
    };
    CustomerService.prototype.getById = function (id) {
        return this.api.get('/customers/' + id);
    };
    CustomerService.prototype.create = function (customer) {
        return this.api.post('/customers', customer);
    };
    CustomerService.prototype.update = function (customer) {
        return this.api.patch('/customers/' + customer.id, customer);
    };
    CustomerService.prototype.delete = function (id) {
        return this.api.delete('/customers/' + id);
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.ApiFactory])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map