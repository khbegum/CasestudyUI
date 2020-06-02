(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Music Store</a>\r\n  <button (click)=\"toggleNavbar()\" class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n  <div class=\"collapse navbar-collapse show\" [ngClass]=\"{ 'show': navbarOpen }\"id=\"navbarSupportedContent\" >\r\n    <ul class=\"navbar-nav navbar-nav-right mr-auto\"(click)=\"toggleNavbar()\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\" *ngIf=\"isEmployee()\">\r\n        <a class=\"nav-link\" routerLink=\"/gadgets\">Music Gadgets</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/about\">AboutUs</a>\r\n      </li>\r\n     \r\n      \r\n    </ul>\r\n    \r\n    <ul class=\"navbar-nav navbar-nav-left \" (click)=\"toggleNavbar()\">\r\n      <li class=\"nav-item active\" *ngIf=\"isLoggedIn()\">\r\n        <a class=\"nav-link\"> <mat-icon matBadge=\"{{coins}}\" matBadgeColor=\"warn\"> monetization_on</mat-icon>coins</a>\r\n       \r\n      </li>\r\n      <li class=\"nav-item active\" *ngIf=\"isLoggedIn()\">\r\n        <a class=\"nav-link\">  <mat-icon matBadge=\"{{cash}}\" matBadgeColor=\"warn\">money</mat-icon>cash </a>\r\n      \r\n      </li>\r\n      <li class=\"nav-item active\" *ngIf=\"isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/cart\">  <mat-icon matBadge=\"{{count}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon></a>\r\n      </li>\r\n        <li class=\"nav-item active\" *ngIf=\"isLoggedIn()\">\r\n            <a class=\"nav-link\" (click)=\"logOut()\">logout <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n      <li class=\"nav-item active\"*ngIf=\"!isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Login <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\"*ngIf=\"!isLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n      </li>\r\n     \r\n     \r\n    </ul>\r\n  </div>\r\n</nav>\r\n<alert></alert>\r\n<router-outlet></router-outlet>\r\n<hr>\r\n<footer>\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"text-center\">© 2020 Copyright:\r\n    <a href=\"musicstore.com/\"> MusicStore.com</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card  class=\"example-card\" >\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Music Store</mat-card-title>\r\n     \r\n    </mat-card-header>\r\n    <img mat-card-image src=\"http://4.bp.blogspot.com/-D2-ERmOGjMo/UCB5V-2fuEI/AAAAAAAACIc/xBK3u2qdnWQ/s1600/%E6%A5%BD%E5%99%A8%E3%81%A8%E9%9F%B3%E9%9F%BF%E6%A9%9F%E5%99%A8%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88+Musical+instruments+vector+graphic.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n      <p>\r\n        It's a music store, here all possible music gadgets are avaliable of good quality and avaliable in different colours also.\r\n      </p>\r\n      <p style=\"color:bule;\">For any enquiry contact us by <br>Email:musicstore123@gmail.com <br>           or<br>Mobile No.:7432189070 </p>\r\n    </mat-card-content>\r\n    \r\n  </mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div style=\"text-align: center;\" *ngIf=\"!(count>0)\">\n  <h1 class=\"display-4\">Sorry !</h1>\n  <p class=\"lead\">You have no products in your cart</p>\n  \n</div>\n\n\n<div>\n\n\n  <div class=\"row\">\n    <mat-card class=\"example-card\"*ngFor=\"let cart of carts ; i as index\" >\n      <img mat-card-image  width=\"200\"height=\"200\" src={{cart.poster}} alt=\"Photo of product\">\n      <mat-card-content>\n        <p  ><b>Name</b>:{{cart.name|uppercase}}</p>\n\n        <p ><b>Type</b>:{{cart.type}}</p>\n        <p ><b>Colour</b>:{{cart.colour}}</p>\n        <p ><b>Cost</b>:{{cart.cost|currency:'Rs.'}}</p>\n        <p ><b>About</b>:{{cart.description}}</p>\n        {{cart.index}}\n        \n        <p ><b>No.of Products</b>:<span *ngIf=\"!enable\">{{cart.productCount}}</span><span *ngIf=\"(key==cart._id)&&enable\"><input size=\"1\" [(ngModel)]=\"cartEdit.productCount\"  #count /><button mat-button color=\"primary\" (click)=\"save()\"><mat-icon>save</mat-icon></button><button (click)=\"cancel()\" color=\"danger\" mat-button><mat-icon>cancel</mat-icon></button> </span><button mat-button class=\"btn btn-primary\" *ngIf=\"!enable\" (click)=\"editProductCount(cart._id)\">Edit<mat-icon> border_color</mat-icon></button></p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"deleteGadgetFromCart(cart)\"class=\"btn btn-danger btn-right\">Delete</button>\n      </mat-card-actions>\n    </mat-card>\n \n</div>\n<button class=\"btn btn-primary\" (click)=\"buy()\">Proceed to buy</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gadget-edit/gadget-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gadget-edit/gadget-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-4 col-md-offset-4\" >\r\n    <form action=\"\">\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Name</label>\r\n<input type=\"text\" name=\"name\" [(ngModel)]=\"gadgets.name\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Type</label>\r\n<input type=\"text\" name=\"type\" [(ngModel)]=\"gadgets.type\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Colour</label>\r\n<input type=\"text\" name=\"colour\" [(ngModel)]=\"gadgets.colour\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Cost</label>\r\n<input type=\"text\" name=\"cost\" [(ngModel)]=\"gadgets.cost\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Poster Url</label>\r\n<input type=\"text\" name=\"poster\" [(ngModel)]=\"gadgets.poster\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Gadget Description</label>\r\n<input type=\"text\" name=\"description\" [(ngModel)]=\"gadgets.description\" class=\"form-group\">\r\n\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"\">Product count</label>\r\n<input type=\"text\" name=\"productCount\" [(ngModel)]=\"gadgets.productCount\" class=\"form-group\">\r\n\r\n</div>\r\n<button (click)=\"save()\" class=\"btn btn-success\" >Save</button> &nbsp;\r\n<button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div style=\"text-align: center;\">\r\n  <h1 class=\"display-4\">Hello, {{users.name}}!</h1>\r\n  <p class=\"lead\">Welcome to Music Store</p>\r\n  \r\n</div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <mat-card  class=\"example-card col-md-4\" *ngFor=\"let gadget of gadgets\" >\r\n        \r\n          <img mat-card-image  width=\"250\"height=\"250\" src={{gadget.poster}} alt=\"Photo of product\">\r\n          <mat-card-content>\r\n           \r\n            <p ><b>Name</b>:{{gadget.name|uppercase}}</p>\r\n   \r\n            <p><b>Type</b>:{{gadget.type}}</p>\r\n            <p ><b>Colour</b>:{{gadget.colour}}</p>\r\n            <p ><b>Cost</b>:{{gadget.cost|currency:'Rs.'}}</p>\r\n            <p ><b>About</b>:{{gadget.description}}</p>\r\n           \r\n          </mat-card-content>\r\n          \r\n\r\n          <mat-card-actions *ngIf=\"gadget.productCount > 0\" >\r\n            <button mat-button (click)=\"addCartToService(gadget._id,gadget.name,gadget.type,gadget.colour,gadget.cost,gadget.poster,gadget.description,gadget.productCount)\"class=\"btn btn-primary btn-right\">Add to Cart</button>\r\n          </mat-card-actions>\r\n          <mat-card-actions *ngIf=\"!(gadget.productCount >0)\">\r\n            \r\n            <input  class=\"btn btn-success btn-right\"  readonly value=\"No Stock\">\r\n            \r\n\r\n          </mat-card-actions>\r\n        \r\n        </mat-card>\r\n        \r\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<form *ngIf=\"employeeCustomerDisplay\" class=\"text-center\">\r\n  <button  mat-raised-button color=\"primary\"  (click)=\"employee()\">Employee</button>\r\n  <button  mat-raised-button color=\"accent\"  (click)=\"customer()\">Customer</button>\r\n  \r\n</form>\r\n\r\n\r\n<form #newUserForm=\"ngForm\" *ngIf=\"loginFormDisplay\">      \r\n        <input type=\"email\" id=\"email\" placeholder=\"Email\"\r\n               required [(ngModel)]=\"loginObject.email\"\r\n               name=\"email\" #userEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\">\r\n        <div *ngIf=\"!userEmail.valid && userEmail.touched\">\r\n        <div class=\"alert alert-danger\">\r\n          <p>Email is required!</p>\r\n          <p>A form with an email field that that must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a \".\". After the \".\" sign, add at least 2 letters from a to z:</p>\r\n        </div></div>            \r\n        <input type=\"password\" id=\"password\" placeholder=\"Password\" required\r\n               [(ngModel)]=\"loginObject.password\" name=\"password\"\r\n               #userPassword=\"ngModel\">\r\n        <div *ngIf=\"!userPassword.valid && userPassword.touched\" class=\"alert alert-danger\">\r\n          Password is required!\r\n        </div>\r\n        \r\n      \r\n      \r\n        <button (click)=\"signIn()\" class=\"btn btn-success m-1\"  [disabled]=\"!newUserForm.form.valid\">\r\n          Login\r\n        </button>\r\n      \r\n        \r\n      \r\n      </form>\r\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-gadgets/music-gadgets.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-gadgets/music-gadgets.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-md-6 col-md-offset-4\">\r\n    <h1>Add Gadgets Form</h1>\r\n    <div class=\"well\">\r\n      <form action=\"\"[formGroup]=\"myForm\" (ngSubmit)=\"onSignup(myForm)\">\r\n    <label  for=\"\">Name:</label><input #name formControlName=\"name\"class=\"form-control\"type=\"text\" #name name=\"\"id=\"name\" placeholder=\"Product name\"><br>\r\n    <div *ngIf=\"myForm.controls['name'].hasError('required')&& myForm.controls['name'].touched\" class=\"alert alert-danger\">\r\n  \r\n    Product name is Required\r\n    </div>\r\n    \r\n    <label for=\"\">Type:</label><input #type formControlName=\"type\" placeholder=\"Product Type\" class=\"form-control\"type=\"text\" name=\"\" id=\"type\"><br>\r\n    <div *ngIf=\"myForm.controls['type'].hasError('required')&& myForm.controls['type'].touched\" class=\"alert alert-danger\">\r\n  Type Required\r\n  \r\n      </div>\r\n      \r\n      <label for=\"\">Colour:</label><input #colour placeholder=\"Product colour\" formControlName=\"colour\"class=\"form-control\"  name=\"\" id=\"colour\"><br>\r\n      <div *ngIf=\"myForm.controls['colour'].hasError('required')&& myForm.controls['colour'].touched\" class=\"alert alert-danger\">\r\n      Colour  required\r\n    \r\n        </div>\r\n        <label for=\"\">Cost:</label><input type=\"number\" min=\"1\" onkeypress=\"return event.charCode >= 48\" placeholder=\"Product cost\" formControlName=\"cost\"class=\"form-control\" #cost name=\"\" id=\"cost\"><br>\r\n      <div *ngIf=\"myForm.controls['cost'].hasError('required')&& myForm.controls['cost'].touched\" class=\"alert alert-danger\">\r\n      cost is  required\r\n    \r\n        </div>\r\n        <label for=\"\">Poster:</label><input placeholder=\"Image Url\" formControlName=\"poster\"class=\"form-control\" #poster name=\"\" id=\"poster\"><br>\r\n      <div *ngIf=\"myForm.controls['poster'].hasError('required')&& myForm.controls['poster'].touched\" class=\"alert alert-danger\">\r\n      Image Url is  required\r\n    \r\n        </div>\r\n        <label for=\"\">Desription:</label><input   placeholder=\"About Product\" formControlName=\"description\"class=\"form-control\" #description name=\"\" id=\"desription\"><br>\r\n      <div *ngIf=\"myForm.controls['description'].hasError('required')&& myForm.controls['description'].touched\" class=\"alert alert-danger\">\r\n      Description  required\r\n    \r\n        </div>\r\n        <label for=\"\">Product count:</label><input   placeholder=\" Product count\" formControlName=\"productCount\"class=\"form-control\" #productCount name=\"\" id=\"productCount\"><br>\r\n        <div *ngIf=\"myForm.controls['productCount'].hasError('required')&& myForm.controls['productCount'].touched\" class=\"alert alert-danger\">\r\n        Product count   required\r\n      \r\n          </div>\r\n        \r\n        \r\n  </form>  \r\n  </div>\r\n     <button type=\"submit\" [disabled]=\"!myForm.valid\" (click)=\"addGadgetToServices(name.value,type.value,colour.value,cost.value,poster.value,description.value,productCount.value)\"class=\"btn btn-primary\">Add</button>\r\n</div>\r\n<br>\r\n<div class=\"col-md-10\">\r\n<table border=\"1\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th> <th>Type</th> <th>Colour</th> <th>Cost</th> <th>Poster</th> <th style=\"width: 33%;\">Descrition</th><th>Product count</th> <th>Product Delete</th><th>Product Edit</th>\r\n\r\n        </tr>\r\n        \r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let gadget of gadgets\">\r\n            <td>{{gadget.name}}</td> <td>{{gadget.type}}</td><td>{{gadget.colour}}</td> <td>{{gadget.cost}}</td>\r\n            <td><img src=\"{{gadget.poster}}\" height=\"100\" width=\"100\"  alt=\"\">  </td> <td> {{gadget.description}}</td><td>{{gadget.productCount}}</td>\r\n            <td  style=\"text-align: center;\"><button class=\"btn btn-danger\"  (click)=\"deleteGadgetFromService(gadget)\">Delete</button></td>\r\n            <td style=\"text-align: center;\"><button class=\"btn btn-primary\" (click)=\"goToEditComponent(gadget._id)\"><mat-icon> border_color</mat-icon></button></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-dialog/payment-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-dialog/payment-dialog.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Payment Details</h1>\n<div>\n    \n        <h1>Product Details</h1>\n                \n                    <div *ngFor=\"let cart of carts\">\n            <p>{{cart.name}} ({{cart.productCount}} items) ={{cart.cost}}</p>\n                       \n                       </div>\n            \n        \n\n          <p>Total payment:{{sum}}</p>\n      \n                      </div>\n<div>\n    <button mat-button color=\"primary\" (click)=\"save()\">\n     Save <mat-icon>save</mat-icon>\n  \n    </button>\n    <button mat-button color=\"danger\" (click)=\"cancel()\">\n      Cancel<mat-icon>cancel</mat-icon>\n  \n    </button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-md-6 col-md-offset-4\">\r\n    <h1>Registration Form</h1>\r\n    <div class=\"well\">\r\n      <form action=\"\"[formGroup]=\"myForm\" (ngSubmit)=\"onSignup(myForm)\">\r\n    <label  for=\"\">User Name:</label><input #name formControlName=\"name\"class=\"form-control\"type=\"text\" #name name=\"\"id=\"name\"><br>\r\n    <div *ngIf=\"myForm.controls['name'].hasError('required')&& myForm.controls['name'].touched\" class=\"alert alert-danger\">\r\n  \r\n    User name is Required\r\n    </div>\r\n    \r\n    <label for=\"\">Email:</label><input #emailid formControlName=\"email\" class=\"form-control\"type=\"text\" name=\"\" id=\"email\"><br>\r\n    <div *ngIf=\"myForm.controls['email'].hasError('required')&& myForm.controls['email'].touched\" class=\"alert alert-danger\">\r\n  Email Required\r\n  \r\n      </div>\r\n      <div *ngIf=\"myForm.controls['email'].hasError('pattern')\" class=\"alert alert-danger\">\r\n        A form with an email field that that must be in the following order: characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a \".\". After the \".\" sign, add at least 2 letters from a to z:\r\n    </div>\r\n\r\n      <!-- <label for=\"\">Type:</label><input #type formControlName=\"type\" placeholder=\"whether Employee or Customer\" class=\"form-control\"type=\"text\" name=\"\" id=\"type\"><br> -->\r\n      \r\n      <mat-label>Type</mat-label>\r\n      <select #type formControlName=\"type\" class=\"form-control\"matNativeControl>\r\n        <option value=\"Employee\">Employee</option>\r\n        <option value=\"Customer\">Customer</option>\r\n        \r\n      </select>\r\n      <div *ngIf=\"myForm.controls['type'].hasError('required')&& myForm.controls['type'].touched\" class=\"alert alert-danger\">\r\n    Type  Required\r\n    \r\n        </div>\r\n      <label for=\"\">Pass Word:</label><input #pass formControlName=\"password\"class=\"form-control\" type=\"password\"#password name=\"\" id=\"password\"><br>\r\n      <div *ngIf=\"myForm.controls['password'].hasError('required')&& myForm.controls['password'].touched\" class=\"alert alert-danger\">\r\n      password required\r\n    \r\n        </div>\r\n        <div  class=\"alert alert-danger\"*ngIf=\"myForm.controls['password'].hasError('minlength')&&myForm.controls['password'].touched\">\r\n     password should be min 8 chars\r\n        </div>\r\n        <div  class=\"alert alert-danger\"*ngIf=\"myForm.controls['password'].hasError('maxlength')&&myForm.controls['password'].touched\">\r\n            password should be max 15 chars\r\n               </div>\r\n  </form>  \r\n  </div>\r\n     <button type=\"submit\" [disabled]=\"!myForm.valid\" (click)=\"addUserToServices(name.value,emailid.value,type.value,pass.value)\"class=\"btn btn-primary\">Sign Up</button>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-diaog/thank-diaog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-diaog/thank-diaog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <h2>Payment Sucessful</h2>\n<p>Thank you for shopping</p>\n<button mat-button (click)=\"thankyou()\">Continue Shopping</button>\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}}\">\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n    <span [innerHTML]=\"alert.message\"></span>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, cartService) {
        this.authService = authService;
        this.cartService = cartService;
        this.title = 'music-store-app';
        this.count = 0;
        this.carts = [];
        this.coins = 0;
        this.cash = 0;
        this.navbarOpen = false;
    }
    isEmployee() {
        return this.authService.isEmployee();
    }
    logOut() {
        this.authService.logOutUser();
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    ngOnInit() {
        this.cartService.getCart().subscribe((data) => {
            this.carts = data;
            for (let i = 0; i < this.carts.length; i++) {
                this.count = this.count + this.carts[i].productCount;
            }
        });
        this.coins;
        this.cash;
        this.payment = localStorage.getItem('totalPayment');
        console.log(this.payment);
        if (this.payment >= 1000) {
            this.coins = this.coins + (0.005 * this.payment);
        }
        if (this.coins >= 500) {
            this.cash = this.cash + (0.1 * this.coins);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_music_gadgets_music_gadgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/music-gadgets/music-gadgets.component */ "./src/app/components/music-gadgets/music-gadgets.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/components/about-us/about-us.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_services_register_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_gadget_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/gadget.service */ "./src/app/services/gadget.service.ts");
/* harmony import */ var _components_gadget_edit_gadget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/gadget-edit/gadget-edit.component */ "./src/app/components/gadget-edit/gadget-edit.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/payment-dialog/payment-dialog.component */ "./src/app/components/payment-dialog/payment-dialog.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_thank_diaog_thank_diaog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/thank-diaog/thank-diaog.component */ "./src/app/components/thank-diaog/thank-diaog.component.ts");
/* harmony import */ var _guards_employee_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guards/employee.guard */ "./src/app/guards/employee.guard.ts");
/* harmony import */ var _shared_alert_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/alert.module */ "./src/app/shared/alert.module.ts");



























const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'about', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
    { path: 'gadgets', component: _components_music_gadgets_music_gadgets_component__WEBPACK_IMPORTED_MODULE_8__["MusicGadgetsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]], canActivateChild: [_guards_employee_guard__WEBPACK_IMPORTED_MODULE_25__["EmployeeGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'edit/:_id', component: _components_gadget_edit_gadget_edit_component__WEBPACK_IMPORTED_MODULE_17__["GadgetEditComponent"] },
    { path: 'payment', component: _components_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PaymentDialogComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"] },
    { path: 'cart/:_id', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_music_gadgets_music_gadgets_component__WEBPACK_IMPORTED_MODULE_8__["MusicGadgetsComponent"],
            _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _components_gadget_edit_gadget_edit_component__WEBPACK_IMPORTED_MODULE_17__["GadgetEditComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"],
            _components_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PaymentDialogComponent"],
            _components_thank_diaog_thank_diaog_component__WEBPACK_IMPORTED_MODULE_24__["ThankDiaogComponent"]
        ],
        entryComponents: [_components_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PaymentDialogComponent"], _components_thank_diaog_thank_diaog_component__WEBPACK_IMPORTED_MODULE_24__["ThankDiaogComponent"]],
        imports: [
            _shared_material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"], _shared_alert_module__WEBPACK_IMPORTED_MODULE_26__["AlertModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"]
        ],
        providers: [_app_services_register_service__WEBPACK_IMPORTED_MODULE_14__["RegisterService"], _app_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_gadget_service__WEBPACK_IMPORTED_MODULE_16__["GadgetService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about-us/about-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {  \r\n \r\n  max-width: 400px;\r\n  align-items: center;\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7O0VBRW5CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7ICBcclxuIFxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/about-us/about-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/components/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.example-card {\r\n  float: left;\r\n  width: 30%;\r\n  padding: 10px;\r\n}\r\n\r\n/* Clearfix (clear floats) */\r\n\r\n.row::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBLDRCQUE0Qjs7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBDbGVhcmZpeCAoY2xlYXIgZmxvYXRzKSAqL1xyXG4ucm93OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gadget.service */ "./src/app/services/gadget.service.ts");





let CartComponent = class CartComponent {
    constructor(cartService, gadgetService, router, activatedRoute) {
        this.cartService = cartService;
        this.gadgetService = gadgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.carts = [];
        this.cartEdit = {
            name: "",
            type: "",
            colour: "",
            cost: "",
            poster: "",
            description: "",
            productCount: "",
            _id: "",
        };
        this.gadget = {
            name: "",
            type: "",
            colour: "",
            cost: "",
            poster: "",
            description: "",
            productCount: "",
            _id: "",
        };
        this.count = 0;
        this.enable = false;
    }
    ngOnInit() {
        this.getCartFromSerive();
    }
    getCartFromSerive() {
        this.cartService.getCart().subscribe((response) => {
            this.carts = response;
            this.count = this.carts.length;
        });
    }
    deleteGadgetFromCart(gadget) {
        this.cartService.deleteGadgetFromCart(gadget).subscribe((result) => {
            alert('deleted');
            this.getCartFromSerive();
        });
    }
    buy() {
        this.router.navigate(['/payment']);
    }
    editProductCount(id) {
        this.key = id;
        this.cartService.getGadgetById(id).subscribe((response) => {
            console.log(response);
            this.cartEdit = response;
        });
        this.gadgetService.getGadgetById(id).subscribe((res) => {
            this.gadget = res;
        });
        if (id) {
            this.enable = true;
        }
    }
    save() {
        if (this.gadget.productCount >= this.cartEdit.productCount) {
            this.cartService.updateGadgetById(this.cartEdit._id, this.cartEdit).subscribe((response) => {
                this.enable = false;
                this.getCartFromSerive();
                this.router.navigate(['/cart']);
            });
        }
        else {
            alert('products are out of stock');
            this.enable = false;
        }
    }
    cancel() {
        this.enable = false;
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_4__["GadgetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/gadget-edit/gadget-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/gadget-edit/gadget-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FkZ2V0LWVkaXQvZ2FkZ2V0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/gadget-edit/gadget-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/gadget-edit/gadget-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: GadgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GadgetEditComponent", function() { return GadgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/gadget.service */ "./src/app/services/gadget.service.ts");




let GadgetEditComponent = class GadgetEditComponent {
    //gadgets:Gadget[]=[];
    constructor(router, activatedRoute, gadgetService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.gadgetService = gadgetService;
        this.gadgets = {
            name: "",
            type: "",
            colour: "",
            cost: "",
            poster: "",
            description: "",
            productCount: "",
            _id: "",
        };
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('_id');
        this.gadgetService.getGadgetById(id).subscribe((response) => {
            console.log(response);
            this.gadgets = response;
        });
    }
    save() {
        this.gadgetService.updateGadgetById(this.gadgets._id, this.gadgets).subscribe((response) => {
            this.router.navigate(['/gadgets']);
        });
    }
    cancel() {
        this.router.navigate(['/gadgets']);
    }
};
GadgetEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_3__["GadgetService"] }
];
GadgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gadget-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gadget-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gadget-edit/gadget-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gadget-edit.component.css */ "./src/app/components/gadget-edit/gadget-edit.component.css")).default]
    })
], GadgetEditComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .example-card {\r\n    float: left;\r\n    width: 20%;\r\n    padding: 10px;\r\n  }\r\n  \r\n  /* Clearfix (clear floats) */\r\n  \r\n  .row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtFQUNmOztFQUVBLDRCQUE0Qjs7RUFDNUI7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENsZWFyZml4IChjbGVhciBmbG9hdHMpICovXHJcbiAgLnJvdzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gadget.service */ "./src/app/services/gadget.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let HomeComponent = class HomeComponent {
    constructor(router, authService, registerService, activatedRoute, gadgetService, cartService) {
        this.router = router;
        this.authService = authService;
        this.registerService = registerService;
        this.activatedRoute = activatedRoute;
        this.gadgetService = gadgetService;
        this.cartService = cartService;
        this.users = {
            name: "",
            email: "",
            type: "",
            _id: ""
        };
        this.gadget = {
            name: "",
            type: "",
            colour: "",
            cost: "",
            poster: "",
            description: "",
            productCount: "",
            _id: "",
        };
        this.gadgets = [];
    }
    ngOnInit() {
        let id = localStorage.getItem('_id');
        this.registerService.getUserById(id).subscribe((response) => {
            console.log(response);
            this.users = response;
        });
        this.getGadgetsFromService();
    }
    addCartToService(_id, name, type, colour, cost, poster, description, productCount) {
        if (this.authService.isLoggedIn()) {
            this.cartService.addCart(_id, name, type, colour, cost, poster, description, productCount).subscribe((response) => {
                this.result = response;
            });
            this.gadgetService.getGadgetById(_id).subscribe((res) => {
                this.gadget = res;
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    getGadgetsFromService() {
        this.gadgetService.getGadgets().subscribe((response) => {
            this.gadgets = response;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_4__["GadgetService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");






let LoginComponent = class LoginComponent {
    constructor(authService, router, registerService, alertService) {
        this.authService = authService;
        this.router = router;
        this.registerService = registerService;
        this.alertService = alertService;
        this.loginFormDisplay = false;
        this.employeeCustomerDisplay = true;
        this.loginObject = {
            email: '',
            password: ''
        };
        this.errorMessage = "";
    }
    signIn() {
        this.authService.signInUser(this.loginObject).subscribe((response) => {
            console.log(response);
            this.result = response;
            this.options = {
                autoClose: false,
                keepAfterRouteChange: false
            };
            alert('success');
            this.alertService.success('Success!!', this.options);
            // alert("Token:" + this.result.token);
            if ((this.result.success == true)) {
                localStorage.setItem('token', this.result.token);
                localStorage.setItem('_id', this.result._id);
                this.router.navigate(['/']);
                let id = localStorage.getItem('_id');
                this.registerService.getUserById(id).subscribe((response) => {
                    // console.log(response);
                    this.users = response;
                    if (this.users.type == this.typeE) {
                        this.authService.isLoggedIn = () => {
                            return true;
                        };
                        localStorage.setItem('Employee', this.result.success);
                    }
                    else if (this.users.type == this.typeC) {
                        this.authService.isLoggedIn = () => {
                            return true;
                        };
                    }
                    else {
                        this.authService.isLoggedIn = () => {
                            return false;
                        };
                        alert("you might be Customer please select correct option");
                        this.router.navigate(['/login']);
                    }
                });
            }
            else {
                this.errorMessage = "invalid username or password";
                alert('Incorrect email or password');
                this.router.navigate(['/login']);
            }
        });
    }
    ngOnInit() {
    }
    employee() {
        this.typeE = "Employee";
        this.loginFormDisplay = true;
        this.employeeCustomerDisplay = false;
    }
    customer() {
        this.typeC = "Customer";
        this.loginFormDisplay = true;
        this.employeeCustomerDisplay = false;
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"] },
    { type: src_app_shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/music-gadgets/music-gadgets.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/music-gadgets/music-gadgets.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVzaWMtZ2FkZ2V0cy9tdXNpYy1nYWRnZXRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/music-gadgets/music-gadgets.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/music-gadgets/music-gadgets.component.ts ***!
  \*********************************************************************/
/*! exports provided: MusicGadgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicGadgetsComponent", function() { return MusicGadgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gadget.service */ "./src/app/services/gadget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




//import { FormBuilder } from '@angular/forms';

let MusicGadgetsComponent = class MusicGadgetsComponent {
    constructor(gadgetService, formBuilder, router) {
        this.gadgetService = gadgetService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.gadgets = [];
        this.myForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            colour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            poster: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            productCount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.getGadgetsFromService();
    }
    getGadgetsFromService() {
        this.gadgetService.getGadgets().subscribe((response) => {
            this.gadgets = response;
            console.log(this.gadgets);
        });
    }
    addGadgetToServices(name, type, colour, cost, poster, description, productCount) {
        this.gadgetService.addGadget(name, type, colour, cost, poster, description, productCount).subscribe((response) => {
            alert('Gadget is added');
            //this.getGadgetsFromService();
            this.router.navigate(['']);
        });
    }
    deleteGadgetFromService(gadget) {
        // alert(gadget._id);
        this.gadgetService.deleteGadget(gadget).subscribe((response) => {
            alert('Data Deleted');
            this.getGadgetsFromService();
        });
    }
    goToEditComponent(id) {
        this.router.navigate(['/edit/' + id]);
    }
};
MusicGadgetsComponent.ctorParameters = () => [
    { type: src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_2__["GadgetService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MusicGadgetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music-gadgets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-gadgets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/music-gadgets/music-gadgets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-gadgets.component.css */ "./src/app/components/music-gadgets/music-gadgets.component.css")).default]
    })
], MusicGadgetsComponent);



/***/ }),

/***/ "./src/app/components/payment-dialog/payment-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/payment-dialog/payment-dialog.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1kaWFsb2cvcGF5bWVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/payment-dialog/payment-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/payment-dialog/payment-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDialogComponent", function() { return PaymentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _thank_diaog_thank_diaog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../thank-diaog/thank-diaog.component */ "./src/app/components/thank-diaog/thank-diaog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/gadget.service */ "./src/app/services/gadget.service.ts");







let PaymentDialogComponent = class PaymentDialogComponent {
    constructor(cartService, dialog, router, gadgetService) {
        this.cartService = cartService;
        this.dialog = dialog;
        this.router = router;
        this.gadgetService = gadgetService;
        this.carts = [];
        this.sum = 0;
        this.gadget = {
            name: "",
            type: "",
            colour: "",
            cost: "",
            poster: "",
            description: "",
            productCount: "",
            _id: "",
        };
    }
    ngOnInit() {
        this.getCartFromService();
        this.sum;
    }
    getCartFromService() {
        this.cartService.getCart().subscribe((response) => {
            this.carts = response;
            for (let i = 0; i < this.carts.length; i++) {
                this.sum = this.sum + ((this.carts[i].cost) * (this.carts[i].productCount));
            }
        });
    }
    save() {
        localStorage.setItem('totalPayment', this.sum);
        let dialogref = this.dialog.open(_thank_diaog_thank_diaog_component__WEBPACK_IMPORTED_MODULE_4__["ThankDiaogComponent"], {
            width: '450px'
        });
        for (let i = 0; i < this.carts.length; i++) {
            this.cartService.deleteGadgetFromCart(this.carts[i]).subscribe((res) => {
                console.log(this.carts[i]._id);
            });
            this.gadgetService.getGadgetById(this.carts[i]._id).subscribe((res) => {
                this.gadget = res;
                console.log(this.gadget.productCount);
                this.gadget.productCount = this.gadget.productCount - this.carts[i].productCount;
                console.log(this.gadget.productCount);
                this.gadgetService.updateGadgetById(this.gadget._id, this.gadget).subscribe((res) => {
                    console.log(res);
                });
            });
        }
        dialogref.afterClosed().subscribe((result) => {
            console.log("dialog was closed", result);
        });
    }
    cancel() {
        this.router.navigate(['/']);
    }
};
PaymentDialogComponent.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_gadget_service__WEBPACK_IMPORTED_MODULE_6__["GadgetService"] }
];
PaymentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment-dialog/payment-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-dialog.component.css */ "./src/app/components/payment-dialog/payment-dialog.component.css")).default]
    })
], PaymentDialogComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let RegisterComponent = class RegisterComponent {
    constructor(registerService, authService, router, formBuilder) {
        this.registerService = registerService;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.users = [];
        this.loginObject = {
            email: '',
            password: ''
        };
        this.errorMessage = "";
        this.myForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
            // mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
        });
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.valid) {
            console.log(form.value);
            // ...our form is valid, we can submit the data
        }
    }
    // signIn() {
    //   this.authService.signInUser(this.loginObject).subscribe((response) => {
    //     console.log(response);
    //     this.result = response;
    //     console.log("Token:" + this.result.token);
    //     if (this.result.success == true) {
    //       localStorage.setItem('token', this.result.token);
    //       this.router.navigate(['/home']);
    //     }
    //     else {
    //       this.errorMessage = "invalid username or password";
    //       this.router.navigate(['/login']);
    //     }
    //   })
    // }
    addUserToServices(name, email, type, password) {
        // alert(name)
        this.registerService.addUser(name, email, type, password).subscribe((res) => {
            // console.log(HttpErrorResponse.arguments)
            alert("successful");
            this.router.navigate(['/login']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/thank-diaog/thank-diaog.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/thank-diaog/thank-diaog.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhhbmstZGlhb2cvdGhhbmstZGlhb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/thank-diaog/thank-diaog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/thank-diaog/thank-diaog.component.ts ***!
  \*****************************************************************/
/*! exports provided: ThankDiaogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankDiaogComponent", function() { return ThankDiaogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let ThankDiaogComponent = class ThankDiaogComponent {
    constructor(router, dialogRef) {
        this.router = router;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    thankyou() {
        this.router.navigate(['/']);
        this.dialogRef.close();
    }
};
ThankDiaogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
ThankDiaogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-diaog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-diaog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thank-diaog/thank-diaog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-diaog.component.css */ "./src/app/components/thank-diaog/thank-diaog.component.css")).default]
    })
], ThankDiaogComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/employee.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/employee.guard.ts ***!
  \******************************************/
/*! exports provided: EmployeeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGuard", function() { return EmployeeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let EmployeeGuard = class EmployeeGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivateChild(next, state) {
        if (this.authService.isEmployee()) {
            return true;
        }
    }
};
EmployeeGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
EmployeeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.serviceUrl = "http://100.26.177.240:3004/api/auth/";
    }
    signInUser(loginInfo) {
        return this.http.post(this.serviceUrl, loginInfo);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    logOutUser() {
        localStorage.removeItem('token');
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
    isLoggedIn() {
        if (localStorage.getItem('token') == null) {
            return false;
        }
        return true;
    }
    isEmployee() {
        return localStorage.getItem('Employee');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.cart = [];
        this.serviceUrl = "http://100.26.177.240:3004/api/cart/";
    }
    addCart(_id, name, type, colour, cost, poster, description, productCount) {
        let newCart = { _id: _id, name: name, type: type, colour: colour, cost: cost, poster: poster, description: description, productCount: productCount };
        return this.http.post(this.serviceUrl, newCart);
    }
    getCart() {
        return this.http.get(this.serviceUrl);
    }
    getGadgetById(_id) {
        return this.http.get(this.serviceUrl + _id);
    }
    deleteGadgetFromCart(cart) {
        return this.http.delete(this.serviceUrl + cart._id);
    }
    updateGadgetById(id, newCart) {
        return this.http.put(this.serviceUrl + id, newCart);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/gadget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/gadget.service.ts ***!
  \********************************************/
/*! exports provided: GadgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GadgetService", function() { return GadgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GadgetService = class GadgetService {
    constructor(http) {
        this.http = http;
        this.gadgets = [];
        this.serviceUrl = "http://100.26.177.240:3004/api/gadgets/";
    }
    getGadgets() {
        return this.http.get(this.serviceUrl);
    }
    getGadgetById(_id) {
        return this.http.get(this.serviceUrl + _id);
    }
    updateGadgetById(id, newGadget) {
        console.log(newGadget);
        return this.http.put(this.serviceUrl + id, newGadget);
    }
    addGadget(name, type, colour, cost, poster, description, productCount) {
        alert(name);
        let newGadget = { name: name, type: type, colour: colour, cost: cost, poster: poster, description: description, productCount: productCount };
        return this.http.post(this.serviceUrl, newGadget);
    }
    deleteGadget(gadget) {
        alert(gadget._id);
        return this.http.delete(this.serviceUrl + gadget._id);
    }
};
GadgetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GadgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GadgetService);



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = "http://100.26.177.240:3004/api/users/";
    }
    getUserById(_id) {
        return this.http.get(this.serviceUrl + _id);
    }
    addUser(name, email, type, password) {
        let newUser = {
            name: name,
            email: email,
            type: type,
            password: password,
        };
        console.log(newUser);
        return this.http.post(this.serviceUrl, newUser);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegisterService);



/***/ }),

/***/ "./src/app/shared/alert.module.ts":
/*!****************************************!*\
  !*** ./src/app/shared/alert.module.ts ***!
  \****************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/shared/alert/alert.component.ts");




let AlertModule = class AlertModule {
};
AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ "./src/app/shared/alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alert/alert.service.ts");





let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success]: 'alert alert-success',
            [_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error]: 'alert alert-danger',
            [_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info]: 'alert alert-info',
            [_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "fade", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html")).default })
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/alert/alert.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/alert/alert.model.ts ***!
  \*********************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.model */ "./src/app/shared/alert/alert.model.ts");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id }));
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");












































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]
        ],
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        ]
    })
], MaterialModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\karim\OneDrive\Documents\CaseStudy\musicAngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map