"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admin_1 = require("../02-access-modifiers/Admin");
var OfficeWorker_1 = require("../02-access-modifiers/OfficeWorker");
/*OfficeWorker*/
var officeWorker = new OfficeWorker_1.OfficeWorker("First Name", "Last Name");
officeWorker.lastName = "New Last Name";
console.log(officeWorker.firstName + " " + officeWorker.lastName);
/*Admin*/
var myAdmin = new Admin_1.Admin("Georgi", "Kyshenko");
console.log("Admin full name: ".concat(myAdmin.firstName, " ").concat(myAdmin.lastName));
