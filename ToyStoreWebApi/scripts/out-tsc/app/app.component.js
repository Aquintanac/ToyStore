import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from './Services/products-service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
var AppComponent = /** @class */ (function () {
    function AppComponent(productsService, confirmationService, messageService) {
        this.productsService = productsService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.title = 'toyStore';
        this.displayEdit = false;
        this.isEdit = false;
        this.dialogHeader = 'Create product';
        this.productForm = new FormGroup({
            Id: new FormControl(''),
            Name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            AgeRestriction: new FormControl('', [
                Validators.min(0),
                Validators.max(100)
            ]),
            Company: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            Price: new FormControl('', [
                Validators.required,
                Validators.min(1),
                Validators.max(1000)
            ]),
            Description: new FormControl('', [
                Validators.required,
                Validators.maxLength(100)
            ]),
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    AppComponent.prototype.showCreateDialog = function () {
        this.dialogHeader = 'Create product';
        this.isEdit = false;
        this.displayEdit = true;
    };
    AppComponent.prototype.showEditDialog = function (product) {
        this.productForm.setValue(product);
        this.dialogHeader = 'Update product';
        this.isEdit = true;
        this.displayEdit = true;
    };
    AppComponent.prototype.showToast = function (severity, summary, detail) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    };
    AppComponent.prototype.createProduct = function () {
        var _this = this;
        this.displayEdit = false;
        if (this.productForm.valid) {
            var product = {
                name: this.productForm.value.Name,
                ageRestriction: this.productForm.value.AgeRestriction,
                company: this.productForm.value.Company,
                price: this.productForm.value.Price,
                description: this.productForm.value.Description
            };
            this.productsService.create(product).subscribe(function (data) {
                if (data && data.Message.toLowerCase() === 'success') {
                    _this.showToast('success', 'Succes', 'Product created');
                }
                else {
                    _this.showToast('error', 'Error', 'Product not created');
                }
                _this.getAllProducts();
            });
        }
    };
    AppComponent.prototype.updateProduct = function () {
        var _this = this;
        this.displayEdit = false;
        if (this.productForm.valid) {
            this.productsService.update(this.productForm.value).subscribe(function (data) {
                if (data && data.Message.toLowerCase() === 'success') {
                    _this.showToast('success', 'Succes', 'Product updated');
                    _this.productForm.reset();
                    _this.getAllProducts();
                }
                else {
                    _this.showToast('error', 'Error', 'Product not updated');
                }
            });
        }
    };
    AppComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete the product?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.productsService.delete(id).subscribe(function (data) {
                    if (data && data.Message.toLowerCase() === 'success') {
                        _this.showToast('success', 'Succes', 'Product deleted');
                    }
                    else {
                        _this.showToast('error', 'Error', 'Product not deleted');
                    }
                    _this.getAllProducts();
                });
            },
            reject: function () {
                _this.showToast('info', 'Canceled', 'Product not deleted');
            }
        });
    };
    AppComponent.prototype.cancel = function () {
        this.displayEdit = false;
        this.productForm.reset();
    };
    AppComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productsService.getAll().subscribe(function (data) {
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
            styleUrls: ['./app.component.css'],
            providers: [
                ConfirmationService,
                MessageService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService,
            ConfirmationService,
            MessageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map