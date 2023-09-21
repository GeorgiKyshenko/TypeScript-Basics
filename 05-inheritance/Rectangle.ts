import { Shape } from "./Shape";

export class Rectangle extends Shape {
  constructor(X: number, Y: number, private _width: number, private _length: number) {
    super(X, Y);
  }

  get width(): number {
    return this._width;
  }

  get length(): number {
    return this._length;
  }

  calculateArea(): number {
    return this._width * this._length;
  }

  getInfo(): string {
    return super.getInfo() + `, width=${this._width}, length=${this._length}`;
  }
}
