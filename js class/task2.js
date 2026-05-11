//Write the output and datatype for below://
console.log("10" + 5) //string "105"
console.log(10 + true)//number 11
console.log(false + null) //number 0
console.log("Hello" + undefined)//string "Helloundefined"
console.log([1,2] + 5)//string "1,25"
//Task 2 – Implicit Type Casting
//Create examples for:
String + Number // "10" + 5 → "105"
Boolean + Number // true + 10 → 11
Array + String // [1,2] + "5" → "1,25"
Object + Number // {} + 10 → "[object Object]10"
Null + Number // null + 10 → 10
//Print datatype using typeof.
//Task 3 – Explicit Type Casting
//Convert the following into Number:
"500"//number 500
true//number 1
false//number 0
null//number 0
"abc"//number NaN
[100]//number 100
//Print the outputs.
//Task 4 – Boolean Constructor
//Check whether below values are true or false using Boolean().
""//false
"javascript" //true
0//false
1//true
null//false
undefined//false
[]//true
{}//true
//Task 5 – Student Pass or Fail
//Take one variable:
//let mark = 45
Condition: 
//Above 35 → Pass
//Below 35 → Fail
//Use if else.
//let mark=45
if(mark){
    if(mark>=35){
        console.log('pass')
    }else if (mark<=35){
        console.log('fail')
    }
}
//Task 6 – Voting Eligibility
//Create a variable:
//let age = 20
//Conditions:
//18 and above → Eligible
//Otherwise → Not Eligible
//let age=20
if(age){
    if(age>=18){
        console.log('Eligible')
  } else if(age<=18){
       console.log('Not Eligible')
    }
}
//Task 7 – Greatest Number
//Find greatest among 3 numbers using if else if.
//Example:
let a = 50
let b = 80
let c = 30
if (a>=b && a>=c){
    console.log( "a is greatest number")
}else if(b>=c && b>=c){
    console.log('b is gratest number')
}else{
    console.log("c is gratest number")
}
//Task 8 – Traffic Light System
//Using switch statement:
//red → stop
//yellow → ready
//green → go
let trafficLight = "green"
switch(trafficLight){
    case"red":console.log("stop")
    break;
    case"yellow": console.log("ready")
    break;
    case"green":console.log("go")
    break;
}
//Task 9 – Login System
//Create variables:
let username = "admin"
let password = "1234"
if(username==="admin"){
    if(password==="1234"){
        console.log("login success")
    } else {
        console.log("invalid login")
    }
}else{
    console.log("invalid login")
}
//Conditions:
//Both correct → Login Success
//Otherwise → Invalid Login
//Use nested if.
//Task 10 – Session Finder
//Take hour value:

//Conditions:
//1–12 → Morning
//13–15 → Afternoon
//16–19 → Evening
//20–24 → Night
//Use else if.
let hour=14

if (hour >=1 && hour <=12){
    console.log('good morning')
}else if(hour >=13 && hour <=15){
     console.log('good Afternoon')
}else if(hour >=16 && hour <=19){
     console.log('good evening')
}else if(hour>=20 && hour<=24){
     console.log('good night')
}
//Bonus Challenge 🔥
//Predict outputs without running:
console.log(true + true) //number 2
console.log("5" - 2)//number 3
console.log("5" + 2)//string "52"
console.log(null + 1)//number 1
console.log(undefined + 1)//number NaN
console.log(Boolean(" "))//boolean true
console.log(Number(true))//number 1
