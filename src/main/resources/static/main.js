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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <app-ecommerce></app-ecommerce>\n</div>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ecommerce/products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ecommerce/shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecommerce/orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ecommerce_clients_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ecommerce/clients/clients.component */ "./src/app/ecommerce/clients/clients.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceComponent"],
                _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
                _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"],
                _ecommerce_clients_clients_component__WEBPACK_IMPORTED_MODULE_12__["ClientsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__["EcommerceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ecommerce/clients/clients.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/clients/clients.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/clients/clients.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/clients/clients.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clients works!\n</p>\n"

/***/ }),

/***/ "./src/app/ecommerce/clients/clients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/clients/clients.component.ts ***!
  \********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/ecommerce/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/ecommerce/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.css":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.html":
/*!****************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light  bg-light fixed-top\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">\n            <img src=\"assets/img/eco-ecology.png\" width=\"30\" height=\"30\" alt=\"\">  \n        BioStore</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n              data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleCollapsed()\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div id=\"navbarResponsive\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item active\">\n                  <a class=\"nav-link\" href=\"#\" (click)=\"reset()\">Home\n                      <span class=\"sr-only\">(current)</span>\n                  </a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<div class=\"row\" style=\"margin-top:70px;\">\n  <div class=\"col-md-9\">\n      <app-products #productsC [hidden]=\"orderFinished\"></app-products>\n  </div>\n  <div class=\"col-md-3\">\n      <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC\n                         [hidden]=\"orderFinished\"></app-shopping-cart>\n  </div>\n  <div class=\"col-md-6 offset-3\">\n      <app-orders #ordersC [hidden]=\"!orderFinished\"></app-orders>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");





var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
        this.collapsed = true;
        this.orderFinished = false;
    }
    EcommerceComponent.prototype.ngOnInit = function () {
    };
    EcommerceComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    EcommerceComponent.prototype.finishOrder = function (orderFinished) {
        this.orderFinished = orderFinished;
    };
    EcommerceComponent.prototype.reset = function () {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsC'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"])
    ], EcommerceComponent.prototype, "productsC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"])
    ], EcommerceComponent.prototype, "shoppingCartC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersC'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"])
    ], EcommerceComponent.prototype, "ordersC", void 0);
    EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./ecommerce.component.html */ "./src/app/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.css */ "./src/app/ecommerce/ecommerce.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/clients.model.ts":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/models/clients.model.ts ***!
  \***************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client(_nameF, _nameL, _Email, _Address, _city, _PaymentMethode, _CardName, _CardNumber, _expiration, _cvv, _id_order) {
        this.nameL = _nameL;
        this.nameF = _nameF;
        this.Email = _Email;
        this.Address = _Address;
        this.city = _city;
        this.PaymentMethode = _PaymentMethode;
        this.CardName = _CardName;
        this.CardNumber = _CardNumber;
        this.expiration = _expiration;
        this.cvv = _cvv;
        this.id_order = _id_order;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-order.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/models/product-order.model.ts ***!
  \*********************************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
var ProductOrder = /** @class */ (function () {
    function ProductOrder(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    return ProductOrder;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-orders.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/models/product-orders.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
var ProductOrders = /** @class */ (function () {
    function ProductOrders() {
        this.productOrders = [];
    }
    return ProductOrders;
}());



/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.html":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center text-info\">COMPLETE YOUR ORDER</h2>\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-4 order-md-2 mb-4\">\n      <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n        <span class=\"text-muted\">Your cart</span>\n      </h4>\n      <ul class=\"list-group mb-3\">\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let order of orders.productOrders\" >\n          <div>\n            <h6 class=\"my-0\">{{ order.product.name }}</h6>\n            <small class=\"text-muted\">{{ order.quantity}} pcs</small>\n          </div>\n          <span class=\"text-muted\">${{ order.product.price }}</span>\n        </li>\n        <li class=\"list-group-item d-flex justify-content-between\">\n          <span>Total (MAD)</span>\n          <strong>{{ total }} MAD </strong>\n        </li>\n      </ul>\n\n    </div>\n    <div class=\"col-md-8 order-md-1\">\n      <form  (ngSubmit)=\"pay()\" class=\"needs-validation\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" name=\"va\" [(ngModel)]=\"this.va\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              Valid first name is required.\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n            <div class=\"invalid-feedback\">\n              Valid last name is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n          <div class=\"invalid-feedback\">\n            Please enter a valid email address for shipping updates.\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n          <div class=\"invalid-feedback\">\n            Please enter your shipping address.\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"City\">City</label>\n            <select class=\"custom-select d-block w-100\" id=\"city\" required>\n              <option value=\"\">Choose...</option>\n                <option value=\"10005\"> Casablanca</option>\n                <option value=\"10013\"> Agadir</option>\n                <option value=\"10017\"> Al Hoceïma</option>\n                <option value=\"10014\"> Béni Mellal</option>\n                <option value=\"10007\"> El Jadida</option>\n                <option value=\"10018\"> Errachidia</option>\n                <option value=\"10003\"> Fès</option>\n                <option value=\"10004\"> Kénitra</option>\n                <option value=\"10019\"> Khénifra</option>\n                <option value=\"10001\"> Khouribga</option>\n                <option value=\"10020\"> Larache</option>\n                <option value=\"10008\"> Marrakech</option>\n                <option value=\"10009\"> Meknès</option>\n                <option value=\"10021\"> Nador</option>\n                <option value=\"10022\"> Ouarzazate</option>\n                <option value=\"10010\"> Oujda</option>\n                <option value=\"10012\"> Rabat</option>\n                <option value=\"10002\"> Safi</option>\n                <option value=\"10023\"> Settat</option>\n                <option value=\"10006\"> Salé</option>\n                <option value=\"10015\"> Tanger</option>\n                <option value=\"10016\"> Taza</option>\n                <option value=\"10011\"> Tétouan</option>\n            </select>\n            <div class=\"invalid-feedback\">\n              Please select a valid country.\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n            <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n            <small class=\"text-muted\">Full name as displayed on card</small>\n            <div class=\"invalid-feedback\">\n              Name on card is required\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit card number</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Credit card number is required\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Expiration date required\n            </div>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-cvv\">CVV</label>\n            <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n            <div class=\"invalid-feedback\">\n              Security code required\n            </div>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <div class=\"container\" style=\"margin-bottom: 15px;\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" *ngIf=\"!paid\">Pay</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\n    <strong>Congratulation!</strong> You successfully made the order.\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _models_clients_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/clients.model */ "./src/app/ecommerce/models/clients.model.ts");




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.orders = this.ecommerceService.ProductOrders;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.orders = _this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    };
    OrdersComponent.prototype.pay = function () {
        this.client = new _models_clients_model__WEBPACK_IMPORTED_MODULE_3__["Client"](this.va, 'stest', 'email', 'address', 'city', 'paymentMethod', 'cc-name', 3434343434443, 2020, 333, 4);
        this.paid = true;
        this.ecommerceService.saveOrder(this.orders).subscribe();
        this.ecommerceService.saveClients(this.client).subscribe();
    };
    OrdersComponent.prototype.loadTotal = function () {
        var _this = this;
        this.sub = this.ecommerceService.TotalChanged.subscribe(function () {
            _this.total = _this.ecommerceService.Total;
        });
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/ecommerce/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/ecommerce/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/products/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\r\n    padding-right: 0;\r\n    padding-left: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.html":
/*!************************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-deck\">\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\n      <div class=\"card text-center\">\n          <div class=\"card-header\">\n              <h4>{{order.product.name}}</h4>\n          </div>\n          <div class=\"card-body\">\n              <a href=\"#\"><img class=\"card-img-top\" src={{order.product.pictureUrl}} alt=\"\"></a>\n              <h5 class=\"card-title\">${{order.product.price}}</h5>\n              <div class=\"row\">\n                  <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n                      <input type=\"number\" min=\"0\" class=\"form-control\" [(ngModel)]=order.quantity>\n                  </div>\n                  <div class=\"col-8 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n                      <button class=\"btn btn-primary\" (click)=\"addToCart(order)\"\n                              [disabled]=\"order.quantity <= 0\">Add To Cart\n                      </button>\n                  </div>\n                  <div class=\"col-12\" *ngIf=\"isProductSelected(order.product)\">\n                      <button class=\"btn btn-primary btn-block\"\n                              (click)=\"removeFromCart(order)\">Remove From Cart\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.productOrders = [];
        this.products = [];
        this.productSelected = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    };
    ProductsComponent.prototype.addToCart = function (order) {
        this.ecommerceService.SelectedProductOrder = order;
        this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
        this.productSelected = true;
    };
    ProductsComponent.prototype.removeFromCart = function (productOrder) {
        // tslint:disable-next-line:prefer-const
        var index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    };
    ProductsComponent.prototype.getProductIndex = function (product) {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(function (value) { return value.product === product; });
    };
    ProductsComponent.prototype.isProductSelected = function (product) {
        return this.getProductIndex(product) > -1;
    };
    ProductsComponent.prototype.loadProducts = function () {
        var _this = this;
        this.ecommerceService.getAllProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.products.forEach(function (product) {
                _this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0));
            });
        }, function (error) { return console.log(error); });
    };
    ProductsComponent.prototype.loadOrders = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.shoppingCartOrders = _this.ecommerceService.ProductOrders;
        });
    };
    ProductsComponent.prototype.reset = function () {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/ecommerce/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/ecommerce/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/services/EcommerceService.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
  \********************************************************/
/*! exports provided: EcommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceService", function() { return EcommerceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var EcommerceService = /** @class */ (function () {
    function EcommerceService(http) {
        this.http = http;
        this.productsUrl = '/api/products';
        this.ordersUrl = '/api/orders';
        this.clientsUrl = '/api/clients';
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.productOrderSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ordersSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.totalSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ProductOrderChanged = this.productOrderSubject.asObservable();
        this.OrdersChanged = this.ordersSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
    }
    EcommerceService.prototype.getAllProducts = function () {
        return this.http.get(this.productsUrl);
    };
    EcommerceService.prototype.saveOrder = function (order) {
        return this.http.post(this.ordersUrl, order);
    };
    EcommerceService.prototype.saveClients = function (clt) {
        return this.http.post(this.clientsUrl, clt, httpOptions)
            .pipe();
    };
    Object.defineProperty(EcommerceService.prototype, "SelectedProductOrder", {
        get: function () {
            return this.productOrder;
        },
        set: function (value) {
            this.productOrder = value;
            this.productOrderSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcommerceService.prototype, "ProductOrders", {
        get: function () {
            return this.orders;
        },
        set: function (value) {
            this.orders = value;
            this.ordersSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcommerceService.prototype, "Total", {
        get: function () {
            return this.total;
        },
        set: function (value) {
            this.total = value;
            this.totalSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    EcommerceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EcommerceService);
    return EcommerceService;
}());



/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n  <div class=\"card-header text-center\">Shopping Cart</div>\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">Total: ${{total}}</h5>\n      <hr>\n      <h6 class=\"card-title\">Items bought:</h6>\n\n      <ul>\n          <li *ngFor=\"let order of orders.productOrders\">\n              {{ order.product.name }} - {{ order.quantity}} pcs.\n          </li>\n      </ul>\n\n      <button class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\n              [disabled]=\"orders.productOrders.length == 0\">Checkout\n      </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");


// tslint:disable-next-line:quotemark



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.loadCart();
        this.loadTotal();
    };
    ShoppingCartComponent.prototype.calculateTotal = function (products) {
        var sum = 0;
        products.forEach(function (value) {
            sum += (value.product.price * value.quantity);
        });
        return sum;
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShoppingCartComponent.prototype.finishOrder = function () {
        this.orderFinished = true;
        this.ecommerceService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    };
    ShoppingCartComponent.prototype.loadTotal = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.total = _this.calculateTotal(_this.orders.productOrders);
        });
    };
    ShoppingCartComponent.prototype.loadCart = function () {
        var _this = this;
        this.sub = this.ecommerceService.ProductOrderChanged.subscribe(function () {
            // tslint:disable-next-line:prefer-const
            var productOrder = _this.ecommerceService.SelectedProductOrder;
            if (productOrder) {
                _this.orders.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_3__["ProductOrder"](productOrder.product, productOrder.quantity));
            }
            _this.ecommerceService.ProductOrders = _this.orders;
            _this.orders = _this.ecommerceService.ProductOrders;
            _this.total = _this.calculateTotal(_this.orders.productOrders);
        });
    };
    ShoppingCartComponent.prototype.reset = function () {
        this.orderFinished = false;
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orders.productOrders = [];
        this.loadTotal();
        this.total = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ShoppingCartComponent.prototype, "onOrderFinished", void 0);
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_EcommerceService__WEBPACK_IMPORTED_MODULE_4__["EcommerceService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
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

module.exports = __webpack_require__(/*! C:\Users\nuguru\Documents\NetBeansProjects\nuguru\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map