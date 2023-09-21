"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Admin.prototype, "firstName", {
        // this special syntax of get and set doestn require return type in the signature, but need to target:ES5 to work
        // The default access is public, so if we remove public from the methods they still will be public
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Admin.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}());
exports.Admin = Admin;
var myAdmin = new Admin("Georgi", "Kyshenko");
// myCustomer.firstName = "Georgi";
// myCustomer.lastName = "Kyshenko";
console.log("Admin full name: ".concat(myAdmin.firstName, " ").concat(myAdmin.lastName));
