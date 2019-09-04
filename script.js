// var firstname = "olayinka";
// console.log(firstname);
// var firstName = "Adebola";
// var age = 38;
// console.log(firstName + " " + "and his age is " + age);
// var married, sex, genger, height;
// married = true;
// console.log(married);
// var yearNow, yearJohn, yearMark;
// var ageJohn = 28;
// var ageMark = 33;
// yearNow = 2019;
// yearJohn = yearNow - ageJohn;
// yearMark = yearNow - ageMark;

// console.log(yearJohn, yearMark);
// console.log(typeof firstName)
// var johnOlder = ageJohn > ageMark;
// var johnOlder = ageJohn < ageMark;

// console.log(johnOlder);

// var calculateformula = 23 - 30 + (15 * 7) / (3 + 4)
// console.log(calculateformula);
// var markMass = 78;
// var markHeight = 1.69
// var johnMass = 92;
// var johnHeight = 1.95

// bodyMassMark = (markMass / (markHeight) * 2);
// console.log(bodyMassMark);
// bodyMassJohn = (johnMass / (johnHeight) * 2);

// console.log(bodyMassJohn);
// Bmi = bodyMassMark > bodyMassJohn;
// console.log(Bmi);
// compare = bodyMassMark > bodyMassJohn;
// console.log(compare);

// console.log("is mark's BMI higher than John's? " + compare);

// var firstName = "John";
// var marriedStatus = "single";

// if (marriedStatus === "married") {
//     console.log(firstName + "is married");
// } else {
//     console.log(firstName + " is Not married");
// }

// var age = 20;

// if (age < 13) {
//     console.log("is a boy");
// } else {
//     console.log("is a man");
// }

// if (age >= 0 && age < 13) {
//     console.log(" is a boy");

// } else if (age >= && age < 20) {
//     console.log("is a teenager");
// } 


var teamJohn = ((89 + 120 + 103) / 3);

var teamMark = ((116 + 94 + 123) / 3);
var mary = (97 + 134 + 105) / 3;
console.log(teamMark, teamJohn, mary);

if (teamJohn > teamMark && teamJohn > mary) {
    console.log("john's team wins by" + teamJohn);
} else if (teamJohn < teamMark && mary < teamMark) {
    console.log("mark's team wins by" + teamMark);
} else if (mary > teamJohn && mary > teamMark) {
    console.log("mary's team wins with " + mary + 'points');
} else {
    console.log('There is a draw');
}
