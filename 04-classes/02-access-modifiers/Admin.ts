export class Admin {
  //the underscore is just a convetion, we can name the fields however we want.
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // this special syntax of get and set doestn require return type in the signature, but need to target:ES5 to work
  // The default access is public, so if we remove public from the methods they still will be public
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myAdmin = new Admin("Georgi", "Kyshenko");
// myCustomer.firstName = "Georgi";
// myCustomer.lastName = "Kyshenko";

console.log(`Admin full name: ${myAdmin.firstName} ${myAdmin.lastName}`);
