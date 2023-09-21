"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(X, Y, _radius) {
        super(X, Y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
