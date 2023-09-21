export class OfficeWorker {
  //other syntax for constructor. The fields are set and defined at the same time. Its parameter-property, mapping is done behind the sceen.
  constructor(private _firstName: string, private _lastName: string) {}

  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }
}

let officeWorker = new OfficeWorker("First Name", "Last Name");

// = sign means that we call the setter not the getter.
officeWorker.lastName = "New Last Name";

console.log(officeWorker.firstName + " " + officeWorker.lastName);
