import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from './Services/products-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
var AppComponent = /** @class */ (function () {
    function AppComponent(producsService) {
        this.producsService = producsService;
        this.title = 'toyStore';
        this.displayEdit = false;
        this.productForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            ageRestriction: new FormControl('', [
                Validators.min(0),
                Validators.max(100)
            ]),
            company: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            price: new FormControl('', [
                Validators.required,
                Validators.min(1),
                Validators.max(1000)
            ]),
            description: new FormControl('', [
                Validators.required,
                Validators.maxLength(100)
            ]),
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    AppComponent.prototype.showEditDialog = function () {
        this.displayEdit = true;
    };
    AppComponent.prototype.createProduct = function () {
        var _this = this;
        this.displayEdit = false;
        if (this.productForm.valid) {
            var product = {
                name: this.productForm.value.name,
                ageRestriction: this.productForm.value.ageRestriction,
                company: this.productForm.value.company,
                price: this.productForm.value.price,
                description: this.productForm.value.description
            };
            this.producsService.create(product).subscribe(function (data) {
                if (data && data.message.toLower() === 'success') {
                    _this.getAllProducts();
                }
            });
        }
    };
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