import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

// In this scenario we made the Shape class abstract and there is no much use of its constructor where we declear X and Y cuz we dont use them in the child classes
let myCircle = new Circle(5, 7, 15);
let myRectangle = new Rectangle(12, 17, 23, 21);

let shapes: Shape[] = [myCircle, myRectangle];

// shapes.push(myCircle);
// shapes.push(myRectangle);

for (let shape of shapes) {
  console.log(shape.getInfo());
  console.log(shape.calculateArea());
  console.log();
}
