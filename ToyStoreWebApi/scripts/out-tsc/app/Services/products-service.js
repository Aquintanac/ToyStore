import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:51305/api/products/';
    }
    ProductsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + 'get');
    };
    ProductsService.prototype.create = function (product) {
        return this.http.post(this.apiUrl + 'add', product);
    };
    ProductsService.prototype.update = function (product) {
        return this.http.post(this.apiUrl + 'update', product);
    };
    ProductsService.prototype.delete = function (id) {
        return this.http.get(this.apiUrl + 'delete/' + id);
    };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products-service.js.map