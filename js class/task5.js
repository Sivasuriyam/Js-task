//Task 1 — Student Registration Form
let name=prompt("student name")
var age=prompt("age")
const department=prompt("department")
console.log(`welcome ${name}`)
console.log(`age: ${age}`)
console.log(`department: ${department}`)

//Task 2 — ATM Withdrawal System
let balance=1000
let amount=prompt("enter the amount to withdraw")
if(amount<100){
    console.log("minimum withdrawal amount is 100")
}else if(amount<=balance){
    console.log("withdrawal successful")
}else{
console.log("insufficient balance")
}
//Task 3 — Swiggy Discount Checker
let orderAmount=prompt("enter the order amount")
if(orderAmount>500){
    console.log("Free Delivery Available")
}else{
    console.log("Delivery Charges Applied")
}


//Task 4 — Instagram Login System
let username = prompt("Enter username:");

if (username === "admin") {

    let password = prompt("Enter password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}
//Task 5 — Traffic Signal System


let signal = prompt("Enter signal color (red / yellow / green):");

switch (signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

//Task 6 — Employee Salary Calculator

function salaryCalculation(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    return totalSalary;
}
let result = salaryCalculation(25000, 5000);

console.log(result);

//Task 7 — E-Commerce Cart Total

let prices = [100, 200, 300, 400];

let total = 0;

// for loop
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

// Average price
let average = total / prices.length;

console.log("Total Price =", total);
console.log("Average Price =", average);

//Task 8 — WhatsApp Contact Book

let user = {
    name: "Rahul",
    phone: "9876543210",
    status: "Active"
};


for (let key in user) {
    console.log(key + " : " + user[key]);
}
//Task 9 — Movie Ticket Booking

function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {

    console.log("Ticket Booking Completed");

    callback();
}

// Function Call
bookTicket(payment);

//Task 10 — Food Delivery Time Tracker

function* orderStatus() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

// Create generator object
let order = orderStatus();

// Show stages one by one
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);