import { Admin } from "../02-access-modifiers/Admin";
import { OfficeWorker } from "../02-access-modifiers/OfficeWorker";

/*Admin*/
let myAdmin = new Admin("Georgi", "Kyshenko");
console.log(`Admin full name: ${myAdmin.firstName} ${myAdmin.lastName}`);

/*OfficeWorker*/
let officeWorker = new OfficeWorker("First Name", "Last Name");
officeWorker.lastName = "New Last Name";
console.log(officeWorker.firstName + " " + officeWorker.lastName);
