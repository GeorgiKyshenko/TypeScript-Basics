class Customer {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myCustomer = new Customer("Georgi", "Kyshenko");
// myCustomer.firstName = "Georgi";
// myCustomer.lastName = "Kyshenko";

console.log(`Customer full name: ${myCustomer.firstName} ${myCustomer.lastName}`);
