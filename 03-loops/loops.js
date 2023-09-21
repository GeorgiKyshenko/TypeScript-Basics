"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfSports = void 0;
exports.listOfSports = ["Boxing", "Swimming", "Running", "Gymnastics", "Golf"];
for (var i = 0; i < exports.listOfSports.length; i++) {
    if (exports.listOfSports[i] == "Boxing") {
        console.log("".concat(exports.listOfSports[i], " is heavy sport"));
    }
    else {
        console.log(exports.listOfSports[i]);
    }
}
console.log("-------enhanced for loop---------");
for (var _i = 0, listOfSports_1 = exports.listOfSports; _i < listOfSports_1.length; _i++) {
    var sport = listOfSports_1[_i];
    console.log(sport);
}
