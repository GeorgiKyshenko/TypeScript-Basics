"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeWorker = void 0;
var OfficeWorker = /** @class */ (function () {
    //other syntax for constructor. The fields are set and defined at the same time. Its parameter-property, mapping is done behind the sceen.
    function OfficeWorker(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(OfficeWorker.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OfficeWorker.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return OfficeWorker;
}());
exports.OfficeWorker = OfficeWorker;
var officeWorker = new OfficeWorker("First Name", "Last Name");
// = sign means that we call the setter not the getter.
officeWorker.lastName = "New Last Name";
console.log(officeWorker.firstName + " " + officeWorker.lastName);
