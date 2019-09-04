var firstname = "olayinka";
console.log(firstname);
var firstName = "Adebola";
var age = 38;
console.log(firstName + " " + "and his age is " + age);
var married, sex, genger, height;
married = true;
console.log(married);
var yearNow, yearJohn, yearMark;
var ageJohn = 28;
var ageMark = 33;
yearNow = 2019;
yearJohn = yearNow - ageJohn;
yearMark = yearNow - ageMark;

console.log(yearJohn, yearMark);
console.log(typeof firstName)
var johnOlder = ageJohn > ageMark;
var johnOlder = ageJohn < ageMark;

console.log(johnOlder);

var calculateformula = 23 - 30 + (15 * 7) / (3 + 4)
console.log(calculateformula);
var markMass = 78;
var markHeight = 1.69
var johnMass = 92;
var johnHeight = 1.95

bodyMassMark = (markMass / (markHeight) * 2);
console.log(bodyMassMark);
bodyMassJohn = (johnMass / (johnHeight) * 2);

console.log(bodyMassJohn);
Bmi = bodyMassMark > bodyMassJohn;
console.log(Bmi);
compare = bodyMassMark > bodyMassJohn;
console.log(compare);

console.log("is mark's BMI higher than John's? " + compare);