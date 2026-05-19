// 1. API Task - User Names Uppercase

const apiUrl = "https://jsonplaceholder.typicode.com/users";
fetch(apiUrl)
  .then(response => response.json())
  .then(users => {
  
    const upperCaseUsernames = users.map(user => user.username.toUpperCase());

    console.log(upperCaseUsernames);
  })
  .catch(error => console.error("Error fetching users:", error));

  // 2. API Task - Expensive Products

const apiUrl = "https://fakestoreapi.com/products";


fetch(apiUrl)
  .then(response => response.json())
  .then(products => {
   
    const expensiveProducts = products.filter(
      product => product.price > 100
    );

   
    console.log(expensiveProducts);
  })
  .catch(error => console.error("Error fetching products:", error));

// 3. Date Concept Task - Digital Clock

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`${hours} : ${minutes} : ${seconds}`);

// 4. String Concept Task - Username Checker

let username = "   Naveen Kumar   ";
let trimmedName = username.trim();
let upperCaseName = trimmedName.toUpperCase();
let hasKumar = upperCaseName.includes("KUMAR");
console.log("Final Name:", upperCaseName);
console.log("Includes KUMAR:", hasKumar);

//5. Array Concept Task - Student Rank System
let marks = [450, 300, 700, 200, 900];


marks.sort((a, b) => b - a);

let top3Marks = marks.slice(0, 3);

console.log("Top 3 Marks:", top3Marks);