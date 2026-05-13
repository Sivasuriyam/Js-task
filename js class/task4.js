//task 1 — Basic Function
//Create a function called welcomeUser.
function welcomeUser(name){
    console.log("welcome" + name);
}
welcomeUser("suriya");

//Task 2 — Parameter + Return
//Create a function squareNumber.
function squareNumber(num){
    return num * num;
}
squareNumber(5);

//Task 3 — Object Function
//Create an object:
let employee={
    name:"rahul",
    salary :50000
}
 function firstemploye(bonus){
    console.log(employee.name)
    console.log(employee.salary+bonus)
}
firstemploye(5000)

//Task 4 — Scope Checking
//Inside a function:
function scope(){
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
scope()
console.log(a)//error
console.log(b)//error
console.log(c) //error   
   
//Task 5 — Arrow Function
//Convert this into arrow function:
const add=(a,b)=>{
    console.log(a+b)
}
add(5,19)

//Task 6 — Callback Function
function multiply(a, b) {
    return a * b;
}
function calculator(callback, num1, num2) {
    const result = callback(num1, num2); // call the callback with numbers
    console.log(result);
}
calculator(multiply, 5, 2); 
    
//Task 7 — Generator Function
//Create generator function offers.
//Requirements:
//Yield:
//"50% OFF"
//"Free Delivery"
//"Cashback
function * fun(){
    yield "50% off"
    yield "free delivery"
    yield "cashback"
}
let genVal=fun()
    console.log(genVal.next().value)
    console.log(genVal.next().value)
    console.log(genVal.next().value)

//Task 8 — Default Parameter
//Create:
let form=function(name,course="javascript"){
    console.log("name",name)
    console.log("course",course)
}
form('suriya')

 //Currying
//Create currying function for multiplication.
//Example:
//multi(2)(3)(4)
function multi (a){
    return function(b){
        return function(c){
            return a*b*c
            
        }
    }
}
console.log(multi(2)(3)(4))
 //Spread Operator
//Merge these arrays: 
let arr1=[1,2,3]
let arr2=[4,5,6]
console.log(...arr1,...arr2)

Merge two objects:
{name:"Navi"}
{role:"Developer"}
let obj1={
    name:"navi"
}
let obj2={
    role:"developer"
}
let mergeobj={...obj1,...obj2}
console.log(mergeobj)
 
//Rest Operator
//Create function:
function random(...a){
    console.log(a)
    console.log(a[0]+a[1]+a[2]+a[3])

}
random(1,2,3,4)



let students = [];


function addStudent(name, ...marks) {
  const student = {
    name,
    marks
  };
  students.push(student);
}


function printStudents() {
  console.log("📋 Student List:");
  students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - Marks: ${student.marks.join(", ")}`);
  });
}


function calculateMarks(student, callback) {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  callback(student.name, total);
}


function addBonusMarks(studentIndex, bonus) {
  const student = students[studentIndex];
  student.marks = [...student.marks, bonus]; // spread operator to add new mark
}

addStudent("Arun", 80, 75, 90);
addStudent("Priya", 85, 88, 92);
addStudent("Kumar", 70, 65, 78);

printStudents();

console.log("\n🎯 Calculating Marks:");
students.forEach(student => {
  calculateMarks(student, (name, total) => {
    console.log(`${name}'s Total Marks: ${total}`);
  });
});

console.log("\n✨ Adding Bonus Marks:");
addBonusMarks(0, 10); 
addBonusMarks(1, 5);  

printStudents();

console.log("\n🎯 Recalculate After Bonus:");
students.forEach(student => {
  calculateMarks(student, (name, total) => {
    console.log(`${name}'s New Total Marks: ${total}`);
  });
});
