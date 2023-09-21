export let listOfSports: string[] = ["Boxing", "Swimming", "Running", "Gymnastics", "Golf"];

for (let i = 0; i < listOfSports.length; i++) {
  if (listOfSports[i] == "Boxing") {
    console.log(`${listOfSports[i]} is heavy sport`);
  } else {
    console.log(listOfSports[i]);
  }
}

console.log("-------enhanced for loop---------");

for (let sport of listOfSports) {
  console.log(sport);
}
