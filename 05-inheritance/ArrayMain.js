"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// In this scenario we made the Shape class abstract and there is no much use of its constructor where we declear X and Y cuz we dont use them in the child classes
let myCircle = new Circle_1.Circle(5, 7, 15);
let myRectangle = new Rectangle_1.Rectangle(12, 17, 23, 21);
let shapes = [myCircle, myRectangle];
// shapes.push(myCircle);
// shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
    console.log();
}
