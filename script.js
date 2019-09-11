// // var firstname = "olayinka";
// // console.log(firstname);
// // var firstName = "Adebola";
// // var age = 38;
// // console.log(firstName + " " + "and his age is " + age);
// // var married, sex, genger, height;
// // married = true;
// // console.log(married);
// // var yearNow, yearJohn, yearMark;
// // var ageJohn = 28;
// // var ageMark = 33;
// // yearNow = 2019;
// // yearJohn = yearNow - ageJohn;
// // yearMark = yearNow - ageMark;

// // console.log(yearJohn, yearMark);
// // console.log(typeof firstName)
// // var johnOlder = ageJohn > ageMark;
// // var johnOlder = ageJohn < ageMark;

// // console.log(johnOlder);

// // var calculateformula = 23 - 30 + (15 * 7) / (3 + 4)
// // console.log(calculateformula);
// // var  markMass = 78;
// // var markHeight = 1.69
// // var johnMass = 92;
// // var johnHeight = 1.95

// // bodyMassMark = (markMass / (markHeight) * 2);
// // console.log(bodyMassMark);
// // bodyMassJohn = (johnMass / (johnHeight) * 2);

// // console.log(bodyMassJohn);
// // Bmi = bodyMassMark > bodyMassJohn;
// // console.log(Bmi);
// // compare = bodyMassMark > bodyMassJohn;
// // console.log(compare);

// // console.log("is mark's BMI higher than John's? " + compare);

// // var firstName = "John";
// // var marriedStatus = "single";

// // if (marriedStatus === "married") {
// //     console.log(firstName + "is married");
// // } else {
// //     console.log(firstName + " is Not married");
// // }

// // var age = 20;

// // if (age < 13) {
// //     console.log("is a boy");
// // } else {
// //     console.log("is a man");
// // }

// // if (age >= 0 && age < 13) {
// //     console.log(" is a boy");

// // } else if (age >= && age < 20) {
// //     console.log("is a teenager");
// // } 


// var teamJohn = ((89 + 120 + 103) / 3);

// var teamMark = ((116 + 94 + 123) / 3);
// var mary = (97 + 134 + 105) / 3;
// console.log(teamMark, teamJohn, mary);

// if (teamJohn > teamMark && teamJohn > mary) {
//     console.log("john's team wins by" + teamJohn);
// } else if (teamJohn < teamMark && mary < teamMark) {
//     console.log("mark's team wins by" + teamMark);
// } else if (mary > teamJohn && mary > teamMark) {
//     console.log("mary's team wins with " + mary + 'points');
// } else {
//     console.log('There is a draw');
// }



// function calculateAge(birthYear) {
// var now = 2019;
// return now - birthYear;
//     return 2019 - birthYear;
// }
// console.log(calculateAge(1994));
// console.log(calculateAge(1905));
// console.log(calculateAge(1903));
// console.log(calculateAge(1978));
// console.log(calculateAge(1984));
// console.log(calculateAge(1930));
// console.log(calculateAge(1920));
// console.log(calculateAge(1910));


// function yearsUnitRetirement(birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 60 - age;
//     if (retirement > 0) {
//         console.log(firstName + "retires in " + retirement + "year");
//     } else {
//         console.log(firstName + "retires in " + retirement + "year");
//     } else {
//         console.log(firstName + "already retired ");
//     }

// console.log(firstName + "retires in " + retirement + "year");

// }

// yearsUnitRetirement(1990, "kunle");
// yearsUnitRetirement(1983, "wale");
// yearsUnitRetirement(1971, "shola");
// yearsUnitRetirement(1963, "ghana");
// yearsUnitRetirement(1953, "sisi");


// function  statement
// var yearsUnitRetirement= function(birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 60 - age;
//     if (retirement > 0) {
//         console.log(firstName + "retires in " + retirement + "year");
//     } else {
//         console.log(firstName + "retires in " + retirement + "year");
//     } else {
//         console.log(firstName + "already retired ");




// var names = ["lanre", "Femi", "mariam", "Azzim", "Joe"];

// // var name = new Array["lanre", "Femi", "mariam", "Azzim", "Joe"];
// // console.log(name);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names.length);
// names[1] = "segun"
// names[2] = "Emmanuel"
// names.push("meeme")
// console.log(names);
// names.unshift("Tayo")
// console.log(names);
// names.pop();
// console.log(names)



// function tipCalculate(bill) {
//     var percentage;
//     if (bill < 1500) {
//         percentage = 0.2;
//     } else if (bill >= 1500 && bill <= 2000) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1
//     }
//     return percentage * bill;
// }
// var bills = [1500, 2500, 500]
// var tips = [
//     tipCalculate(bill[0]),
//     tipCalculate(bill[1]),
//     tipCalculate(bill[2])
// ];
// console.log(tips);
// var totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totalBills);


// object literals and methods

// var fruits = ["cashew", "mango", "banana"];
// fruits[0];

// var vehicle = ["model", "color", "mileage", "type", "year"];
// var vehicle = {
//     model: "camery",
//     color: "red",
//     mileage: "200",
//     type: "car",
//     year: 2006,
//     Drivers: ["Mike", "Favour", "John"]

// };
// console.log(vehicle.Drivers[0]);
// vehicle.model = "venza";
// console.log(vehicle);




// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: true,
//     calculateAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// };

// console.log(person.firstName);
// console.log(person["lastName"]);

// person.isMarried = false;
// person.calculateAge();
// console.log(person);


// var John = {
//     fullName: "John Doe",
//     mass: 110,
//     height: 1.95,
//     calculateBMI: function () {
//         this.calculateBMI = this.mass / (this.height * this.height);
//         return this.calculateBMI;
//     }


// };
// console.log(John);

// var Mark = {
//     fullName: "Mark Andrew",
//     mass: 78,
//     height: 1.69,
//     calculateBMI: function () {
//         this.calculateBMI = this.mass / (this.height * this.height);
//         return this.calculateBMI;
//     }


// };
// console.log(Mark);
// if (John.calculateBMI() > Mark.calculateBMI()) {
//     console.log("John is higher than Mark");
// } else if (John.calculateBMI() < Mark.calculateBMI()) {
//     console.log("Mark is higher than John");
// } else {
//     console.log("they have the same");
// }

