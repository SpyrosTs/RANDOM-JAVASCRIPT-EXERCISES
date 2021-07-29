// let random = Math.random();

// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }

// const dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//     console.log("I hate Monday");
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I love Saturdays");
// }

// let password = prompt("Enter a password");

// if (password.length >= 6) {
//     console.log("Long enough password");
// } else {
//     console.log("Password too short. Must be at least 6+ characters");
// }




// const num = 102;
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }

// const input = prompt("Enter something");

// if(input){
//     console.log("TRUTHY");
// }else{
//     console.log("FALSY");
// }

// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("Valid Password");
// }else{
//     console.log("Incorect format for password!");
// }

// const age = 11;
// if (age >= 0 && age < 5 || age > 65) {
//     console.log("FREE");
// } else if (age >= 0 && age <= 10) {
//     console.log("$10");
// } else if (age > 10 && age < 65) {
//     console.log("$20");
// }else{
//     console.log("Invalid Age");
// }

// const airplaneSeats = [
//     ['Ruth', 'Anthony', 'Stevie'],
//     ['Amelia', 'Pedro', 'Maya'],
//     ['Xavier', 'Ananya', 'Luis'],
//     ['Luke', null, 'Deniz'],
//     ['Rin', 'Sakura', 'Francisco']
// ];
// airplaneSeats[3][1]='Hugo';

// var product ={
//     name:"Gummy Bears",
//     inStock: true,
//     price: 1.99,
//     flavors: ["grape", "apple", "cherry"]
// }


// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// var fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
// console.log(fullAddress);

// for(let i = 1; i<=10; i +=1){
//     console.log(i);
// }

// for(let i = 0; i<6; i++){
//     console.log("Da ba dee da ba daa")
// }


// for(let i=100; i>=0; i ){
//     console.log(i);
// }

// const people = [["Scooby", "Velma", "Daphne", "Shaggy", "Fred"],
//     ["Nick", "John", "Peter"],
//     ["Elon", "Musk", "Jeff", "Bezos"]
// ];


// for(let i = 0; i< people.length; i++){
//     console.log(`ROW ${i+1}`);
//     for(let j = 0; j<people.indexOf[i]; j++){
//         console.log(people[j]);
//     }
// }


//GUESS GAME

// let maximum = parseInt(prompt("Enter the maximum number!"));

// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }


// const targetNum = Math.floor(Math.random() * maximum) + 1

// let guess = parseInt(prompt("Enter your first Guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high. Enter a new guess.");
//     } else {
//         guess = prompt("Too low. Enter a new guess");
//     }
// }

// if(guess === 'q'){
//     console.log("Ok you quit");
// }else{
//     console.log("Congrats you win");
//     console.log(`It took you ${attempts} guesses`);
// }

// const numbers = [1,2,3,4,5,6,7,8,9];


// for(let num of numbers){
//     console.log(num * num);
// }

// let input = prompt("What would you like to do");

// const todos = [];

// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log("*****************");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("*****************");
//     }
//     else if (input === 'new') {
//         const newTodo = prompt("Ok what is the new Todo?");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`);
//     }else if( input === 'delete'){
//         const index = parseInt(prompt("Ok, enter an index to delete from the list"));
//         if(!Number.isNaN(index)){
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok deleted ${deleted}`);
//         }else{
//             console.log("Unknown index")
//         }
//     }
//     input = prompt("What would you like to do");
// }
// console.log("Ok you quit the app");

// function sing(){
//     console.log("DO");
//     console.log("RE");
//     console.log("ME");
// }

// sing();


// function rant(message){

//         console.log(`I hate ${message}`.toUpperCase());
//         console.log(`I hate ${message}`.toUpperCase());
//         console.log(`I hate ${message}`.toUpperCase());

// }

// rant('racism');

// function isSnakeEyes(num, num1){
//         if(num === 1 && num1 === 1){
//             console.log("Snake Eyes");
//         }else{
//             console.log("Not Snake Eyes");
//         }
//     }

//     isSnakeEyes(2, 5);



// function lastElement(arr) {
//     if (!arr.length) return null;
//     return arr[arr.length - 1];
// }

// lastElement([1,2,3,6,7]);


// function capitalize(str){

//     return (str[0].toUpperCase()+str.slice(1));
// }

// capitalize('nick');

// function sumArray(arr){
//     let sum=0;
//     for(let i = 0; i < arr.length; i++){
//         sum +=arr[i];
//     }
//     return sum;
// }

// function returnDay(number){

//     if(number<1 || number>7){
//         return null;
//     }
//     const days=['Monday', 'Thirsday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
//     return days[number - 1]
// }

// var square = function(num){
//     return Math.pow(num, 2);
// }


// var hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount++;
//         return 'EGG';
//     }
// }

// const names = ['  nick', '  john', '  Vag', 'myrto']

// function cleanNames(names) {
//     let arrayOfStrings = names.map(function (trimmedArray) {
//          return trimmedArray.trim();
//      });
//      return arrayOfStrings;
//     }

// function cleanNames(names) {
//     return names.map(function (x) {
//         return x.trim;
//     })
//  }


// const greet = (name) =>{
//     return `Hey ${name}!`;
// }

// const id = setInterval(() =>{
//     console.log(Math.floor(Math.random() * 100) + 1);
// }, 2000)



// function validUserNames(x) {
//     return x.filter(x => x.length < 10)
// }
 

// var validUserNames = function (x) {
//     return x.filter(x => x.length < 10)
// }


// var validUserNames = (x) => {
//     return x.filter(x => x.length < 10)
// }


// var validUserNames =(x) => x.filter(x => x.length < 10)

// function allEvens(arr) {
//     return arr.every(function(num) {
//         return num % 2 === 0;
//     });
// }
 

