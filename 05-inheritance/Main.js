"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 7, 15);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(12, 17, 23, 21);
console.log(myRectangle.getInfo());
