// 1. Student Attendance System
const presentStudent = ["suriya", "naveen", "vijay"];
const absentStudent = ["vijay", "ajith"];
const mergeStd = [...presentStudent, ...absentStudent, "praveen"];
console.log(mergeStd);
// 2. E-Commerce Cart
const mobile={
    mobile:"iphone",
    model:"iphone 11",
    price:"50000"
};
const charger={
    charger:"iphone charger",
    watt:"20w",
};
const objmerge={
    ...mobile,...charger,deliverydate:"25-05-2026"}
    console.log(objmerge)
// 3. Food Delivery App
function orderFood(...items) {
  console.log("Total items ordered:", items.length);

  console.log("First item:", items[0]);

  console.log("Last item:", items[items.length - 1]);
}
orderFood("Pizza", "Burger", "Pasta", "Ice Cream");

// 4. Employee Salary Filter
const employees = [
  { name: "John", salary: 45000 },
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 75000 },
  { name: "David", salary: 50000 }
];


const filteredEmployees = employees.filter(
  employee => employee.salary > 50000
);
console.log(filteredEmployees);

// 5. Online Game Score Board
const scores = [100, 200, 150, 250, 300];

const totalScore = scores.reduce((total, score) => {
  return total + score;
}, 0);

console.log("Final Total Score:", totalScore);