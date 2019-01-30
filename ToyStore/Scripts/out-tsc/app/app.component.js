import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from './Services/products-service';
var AppComponent = /** @class */ (function () {
    function AppComponent(producsService) {
        this.producsService = producsService;
        this.title = 'toyStore';
    }
    AppComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.producsService.getAll().subscribe(function (data) {
            if (data) {
                _this.products = data;
            }
            else {
                _this.products = null;
            }
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map