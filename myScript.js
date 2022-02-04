// function hello(){
//     console.log('hellooooo');
// }

// hello();

// function multiply(a, b){
//     console.log('check');
//     return a + b;
// }

// multiply(10, 15);

// var myFunc = function (a, b){
//     return a*b;
// }
// console.log(myFunc(10, 15));

// const getRectArea = function(width, height) {
//     return width * height;
//   };

// console.log(getRectArea(3, 4));

// mini facebook
var userData = [
    {
        userName: "akh177",
        password: "e5623736"
    },
    {
        userName: "Pravin",
        password: "p1234"
    },
    {
        userName: "Suraj",
        password: "s1234"
    },
    {
        userName: "Rohit",
        password: "r1234"
    }
]

var newsFeed = [
    {
        userName: "akh177",
        timelineFeed: "This is my first JavaScript code!!"
    },
    {
        userName: "Pravin",
        timelineFeed: "Pravin Say's :Javascript is really awsomeeeee!"
    },
    {
        userName: "Suraj",
        timelineFeed: "Suraj say's :Javascript is really awsomeeeee!"
    },
    {
        userName: "Rohit",
        timelineFeed: "Rohit Say's :Javascript is really awsomeeeee!"
    }
]
//var userName = prompt("please enter userName..");
//var password = prompt("please enter password..");

function IsUserValid(myUserName, myPassword) {

    console.log('user check function called for user ' + myUserName);

    for (var i = 0; i < userData.length; i++) {
        if (myUserName === userData[i].userName && myPassword === userData[i].password) {
            return true;
        }
    }
    return false;
}

function login(user, passwd) {

    console.log(user)

    if (IsUserValid(user, passwd)) {
        // console.log(newsFeed);
        return true;
    }
    return false;

}

function faceBookLogin(){
    console.log("inside login function");

    var userName = document.getElementById("txt_username").value;
    var password = document.getElementById("txt_password").value;
    var errorLabel = document.getElementById("lbl_errormsg");

    //alert(userName);

    if(login(userName, password)){
        window.location.href = "file:///C:/Projects/javaScript/HomePage.html";
    }else{
        errorLabel.hidden = false;
    }
}

//login(userName, password);

// //background generator
// var colBtn1 = document.querySelector(".color1");
// var colBtn2 = document.querySelector(".color2");
// var css = document.querySelector("h4");

// var body = document.querySelector(".backgroundGeneratorClass");

// //console.log(body);

// function SetGradient(){
//     body.style.background = "linear-gradient(to right, "+colBtn1.value+" , "+colBtn2.value+")";
//     css.textContent = body.style.background;
// }

// colBtn1.addEventListener("input", SetGradient)
// colBtn2.addEventListener("input", SetGradient);

// colBtn1.value = colBtn1.value;

// //Advanced Javascript

// //Variables
// //1. const
// //2. let

// const player = "Amol Khedkar";
// let score = 100;
// if(score === 100){
//     let score = "Khedkar";
//     console.log(score);
// }

// const a= 10;
// const b= 20;

// const obj = {
//     a,
//     b
// }

// //arrow functions 

// //normal function
// function add(a, b){
//     return a+b;
// }

// //short hand or arrow function
// let add2 = (a, b) => a+b

// let add3 = (a, b) => {
//     if(a > b) {
//         return a+b;
//     }
//     else{
//         return a-b;
//     }
// }

// //function closure
// function first (){
//     var greet = "hi";
//     function second(){
//         alert(greet)
//     }
//     return second;
// }

// var newFunct = first();
// newFunct();

// //shorthand of above function 

// const first1 = () => {
//     const greet = "hi";
//     const second = () => {
//         alert(greet);
//     }
//     return second;
// }

// const newFun = first1();
// newFun();

// //currying - means dividing function with multiple parameters into functions with single parameters

// //normal function with multiple parameters
// const multiplication = (a,b) => a*b;
 
// const curriedMultiply = (a) => (b) => a*b;
// const multiplyBy5 = curriedMultiply(5)

// //advanced array
// const array = [1, 2, 10, 16];
// const result = array.forEach((num) =>{
//     let num2 = num * 2
//     console.log(num2);
// })

// const array2 = [2, 4, 8, 10];
// const newArray = [];
// const result1 = array2.forEach((num) =>{
//     newArray.push(num*2);
// })

// //map, filter and reduce
// const array2 = [2, 4, 8, 10];
// const newArray = [];
// const result1 = array2.forEach((num) =>{
//     newArray.push(num*2);
// })

// const mapArray1 = array2.map(num => {
//     return num*3
// })
// const mapArray = array2.map(num => num*3);

// //filter
// const filterArray = array2.filter(num => {
//     return num > 2;
// })

// //reduce
// const reduceArray = array2.reduce(accumalator, num => {
//     return accumalator + num;
// }, 0);

// //exercise
// const array3 = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
  
//   ];

//   //Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const userNames = []
// const userNameArray = array3.forEach(username => {
//     userNames.push(username.username +"!");
// });

// //Create an array using map that has all the usernames with a "?" to each of the usernames
// const userNamewithQuestn = array3.map(user => user.username+"?");

// //Filter the array to only include users who are on team: red
// const usersInRedTeam = array3.filter(user => user.team === "red");

// //Find out the total score of all users using reduce
// const totalScoreOfUsers = array3.reduce(accumalator, user => {
//     return accumalator + user.score;
// }, 0)


// //Advance objects 
// //refernce type
// const object1 = {value : 10};
// const object2 = object1;
// const object3 = {value : 20};

// //context type
// const object4 = {
//     a:function(){
//         console.log(this)
//     }
// }

// //instantiation
// class Player {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }

//     intro(){
//         console.log(`hey, this is ${this.name}`);
//     }
// }

// class Wizard extends Player{
//     constructor(name, type){
//         super(name, type)
//     }
    
//     play(){
//         console.log(`well i am a ${this.type}`);
//     }

// }

// const objWizard = new Wizard("Demon", "Sniper");
// objWizard.intro();

// //pass by value VS pass by reference 
// //by value - immutable 
// var a = 5;
// var b = a;
// b++;
// console.log(b);

// //by reference - mutable
// var obj = [1, 2, 3, 4, 5];
// var obj2 = obj;
// obj2.push('amol');
// obj2.pop(1);
// obj2.slice(0, 2);
// console.log(obj2);

// var myObj1 = {a:'a', b:'b', c:'c'};
// var myObj2 = myObj1;
// myObj2.a = 'amol'; // actual array gets modified as the gave reference of myObj1
// console.log(myObj2);

// //shallow clone
// var Object1 = {name : 'Amol', type: 'Developer', Org: 'FIS'}
// var Object2 = {...object1} //new way of cloning the object
// var Object3 = Object.assign({}, Object1);

// //Deep cloning 
// var Object4 = JSON.parse(JSON.stringify(Object1)); // example of deep cloning

// // Solve the below problems:

// // #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragons.includes('Jhon');

// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// // #3) Create a function that calulates the power of 100 of a number entered as a parameter
// const power = (a) => a**100;
// console.log(a);

// // #4) Useing your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result

// //ES8
// //different options to work on objects
// let obj = {
//     userName0 : 'AMol',
//     password1 : 'abc123',
//     type2: 'developer'
// };

// Object.keys(obj).forEach((key) => {
//     console.log(obj[key]);
// })

// Object.values(obj).forEach((values) => {
//     console.log(values);
// })

// Object.entries(obj).forEach(values => {
//     console.log(values);
// })

// //get usernames with the id asssign at the end of the key
// Object.entries(obj).map(values => {
//     return values[1] + values[0].replace('userName','');
// })

// //exercise for EC8
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// console.log(startLine);
// console.log(turtle.padStart(9));
// console.log(rabbit.padStart(9));

// // #3) Get the below object to go from:
// let obj = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   Object.entries(obj).forEach(values => {
//      console.log(values) 
//   });

//   Object.entries(obj).map(values => {
//       return `my ${values[1]} is ${values[1]} the ${values[1]} `; 
//   })

//   Object.entries(obj).map(values => {
//     return values[1]
// })

//   // to this:
//   'my name is Rudolf the raindeer'
//   Object.entries(obj).map(value => value.join(" ")).join(' ')

//   //ch - ES-10
//   //Flat function 

//   let Zoo = ['🐢', '🐇', ['🐇','🐇'], ['🐇','🐇']];
//   console.log(Zoo);
//   console.log(Zoo.flat())

// //flatMap function 
// Zoo.flatMap(animals => animals+'🐇');

// //fromEntries 
// const Objects1 = [['tom',23], ['dom',24], ['som',25]]
// Object.fromEntries(Objects1);//generates / converts arrays into objects - exactly opposite to what entries from ES8 does

// //ES-10 exercise
// // #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// array.flat(3);

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// greeting.flatMap(values => values.join(''))

// //#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const usersArray =  Object.entries(users);

// Object.entries(users).forEach(values => {
//     console.log(values[1]);
// })

// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const usersArray =  Object.entries(users);
// undefined
// usersArray
// //(3) [Array(2), Array(2), Array(2)]0: (2) ['user1', 18273]1: (2) ['user2', 92833]2: (2) ['user3', 90315]length: 3[[Prototype]]: Array(0)
// const mulytipliedArray = users
// undefined
// const mulytipliedArray = usersArray.map(users => users[0])
// undefined
// mulytipliedArray
// //(3) ['user1', 'user2', 'user3']
// const multiArray = usersArray.map(users => users[0], users[1]*2)
// undefined
// //multiArray['user1', 'user2', 'user3']0: "user1"1: "user2"2: "user3"length: 3[[Prototype]]: Array(0)
// const multiArray = usersArray.map(users => [users[0], users[1]*2])
// undefined
// multiArray
// //(3) [Array(2), Array(2), Array(2)]0: (2) ['user1', 36546]1: (2) ['user2', 185666]2: (2) ['user3', 180630]length: 3[[Prototype]]: Array(0)
// const multObjects = Object.fromEntries(multiArray)
// undefined
// multObjects
// //{user1: 36546, user2: 185666, user3: 180630}

// //Advance loops in ES-10
// //we have seen for, foreach, do, do-while till now
// //now we will see "for of" and "for in"

// //for of - will allow us to iterate through arrays , strings etc
// const basket = ['apple', 'banana', 'orange', 'leamon'];
// for (item of basket){
//     console.log(item);
// };

// for(item of 'Amol is a good boy'){
//     console.log(item);
// }

// //for in - will allow us to enumarate through the objects 
// const fruiteBasket = {
//     name : 'Banana',
//     price : 20,
//     quantity : '12'
// }

// for(item in fruiteBasket){
//     console.log(item, item);
// }

// //exercise
// //find max number from array
// const array = [-1,0,3,100, 99, 2, 99]
// var preValue1 = 0;
 
// for(item of array){
//     if(item > preValue1){
//         preValue1 = item;
//     }
// }

// const array = [-1,0,3,100, 99, 2, 99]

// function GetMaxNumber(array){

//     var preval = 0;

//     array.forEach(item => {
//         if(item > preval){
//             preval = item;
//         }
//     })
//     return preval;
// }

// function GetMaxNumberFromArray(array){
//     var previousValue = 0;
//     for(let i = 0; i < array.length; i++){
//         if(previousValue < array[i]){
//             previousValue = array[i];
//         }
//     }
//     return previousValue;
// }

// console.log(preValue1);

// const maxValue = array.reduce((prev, curr) => {
//     return Math.max(prev, curr);
// }, 0)

// // Question #2:
// // Write a function checkBasket() that lets you know if the item is in the basket or not
// const amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
//   }

// function checkBasket(value){
//       for(item in amazonBasket){
//           if(item === value){
//                 return 'true';
//           }
//       }
//   }

//   //ES-2021
//   //1. Nullish coleside operator - ??
//   //2. query operator - ?
//   //3. string funstion's - str.replaceAll

//   let message = "Javascript is best of best!!!";
//   message.replaceAll('best', 'bestest');

//   //check call stack of javascript
//   let count = 0;
//   function checkMaxCallStack(){
//     count++;
//     console.log(count);
//     checkMaxCallStack();
//   }

//   //synchronous and async javascript
//   console.log(1);
//   setTimeout(() =>{
//       console.log(2);
//   }, 2000);
//   console.log(3);
