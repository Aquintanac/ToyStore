(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Services/products-service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/products-service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



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
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">    \r\n    <div class=\"col-md-12\" *ngIf=\"products\">\r\n        <h3>Products</h3>\r\n        <button type=\"button\" (click)=\"showCreateDialog()\" class=\"btn btn-outline-primary\">Create</button>\r\n        <p-table [value]=\"products\">\r\n            <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th>Id</th>\r\n                    <th>Name</th>\r\n                    <th>Age</th>\r\n                    <th>Company</th>\r\n                    <th>Price</th>\r\n                    <th></th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-product>\r\n                <tr>\r\n                    <td>{{product.Id}}</td>\r\n                    <td>{{product.Name}}</td>\r\n                    <td>{{product.AgeRestriction}}</td>\r\n                    <td>{{product.Company}}</td>\r\n                    <td>{{product.Price | currency}}</td>\r\n                    <td>\r\n                        <button class=\"btn btn-outline-primary active\" (click)=\"showEditDialog(product)\">Update</button>\r\n                        <button class=\"btn btn-outline-primary active\" (click)=\"deleteProduct(product.Id)\">Delete</button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n\r\n        <p-dialog header=\"{{dialogHeader}}\" [(visible)]=\"displayEdit\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '500px', minWidth: '400px'}\" [minY]=\"70\"\r\n                  [maximizable]=\"true\" [baseZIndex]=\"10000\">\r\n\r\n            <form [formGroup]=\"productForm\">\r\n                <input formControlName=\"Name\" maxlength=\"50\" class=\"form-control\" placeholder=\"Name\" />\r\n                <input formControlName=\"AgeRestriction\" type=\"number\" min=\"0\" max=\"100\" class=\"form-control\" placeholder=\"Age\" />\r\n                <input formControlName=\"Company\" class=\"form-control\" maxlength=\"50\" placeholder=\"Company\" />\r\n                <input formControlName=\"Price\" type=\"number\" class=\"form-control\" min=\"1\" max=\"1000\" placeholder=\"Price\" />\r\n                <input formControlName=\"Description\" class=\"form-control\" maxlength=\"100\" placeholder=\"Description\" />\r\n            </form>\r\n\r\n            <p-footer>\r\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"createProduct()\" *ngIf=\"!isEdit\" label=\"Save\" [disabled]=\"!productForm.valid\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"updateProduct()\" *ngIf=\"isEdit\" label=\"Update\" [disabled]=\"!productForm.valid\"></button>\r\n                <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"cancel()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n            </p-footer>\r\n        </p-dialog>\r\n\r\n        <p-confirmDialog header=\"Delete\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\r\n\r\n        <p-toast position=\"top-right\"></p-toast>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"!products\">\r\n        <h3>No data found</h3>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/products-service */ "./src/app/Services/products-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);






var AppComponent = /** @class */ (function () {
    function AppComponent(productsService, confirmationService, messageService) {
        this.productsService = productsService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.title = 'toyStore';
        this.displayEdit = false;
        this.isEdit = false;
        this.dialogHeader = 'Create product';
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)
            ]),
            AgeRestriction: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)
            ]),
            Company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)
            ]),
            Price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000)
            ]),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_13__);















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"]
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_12__["MessageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alejandro.quintana\source\repos\ToyStore\ToyStoreWebApi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map