"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Georgi", "Kyshenko");
// myCustomer.firstName = "Georgi";
// myCustomer.lastName = "Kyshenko";
console.log("Customer full name: ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
