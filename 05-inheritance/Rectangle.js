"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(X, Y, _width, _length) {
        super(X, Y);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    get length() {
        return this._length;
    }
    calculateArea() {
        return this._width * this._length;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
