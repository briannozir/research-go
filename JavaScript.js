console.log('Hello Javascript');
console.error('try harder this is an error');
console.warn('smoking is dangerous to your health');




//Variables

// var is globally scope make ur code conflict - not using anymore , let,const
//const name = 'john';  // constant never change
//let age = 27; //can change
//age = 28;
//console.log(age);


// variables String, Numbers, Boolean, Null, Undefined
//using typeof you can know the variable if its string number etc.
const name = 'brian';
//let age = '27';
const rating ='4.5';
const isNextYear = true;
//const x = null;
//const y = undefined;
let z;

//console.log(typeof age);
console.log(typeof z);

//Concantenation
//console.log('My name is '+ name +' and I am ' + age +'ill be turning to ' + age + 'years old next year');
//age = '28';
//console.log('Ill be Turning ' + age + ' years old nextyear');

//template String
//const hello = `My name is ${name} and I am ${age}years old now`;

//console.log(hello);

const s = 'Hello World!';
console.log(s.substring(0, 9).toUpperCase());

const g = 'technology, computers, it, code';
 console.log(g.split(', '));

 //Arrays - variables that hold multiple value

 /* multi line comment */  

 const numbers = new Array(1,2,3,4,5,6,7);
 
 console.log(numbers);

 const fruits = ['apples','orange','banana'];

 fruits[3] = 'pineapple';

 fruits.push('watermelon');
 
 fruits.unshift('atis');
fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray('apple'));


console.log(fruits.indexOf('pineapple'));

 console.log(fruits); 


 const person = {
     firstName: 'Brian',
     lastName: 'Rizon',
     age: 30,
     hobbies: ['mountainbiking','movies'],
     address: {
         street:'140C Spolarium Street Cebu City',
         city: 'Cebu City',
         state: 'PH' 
     }
 }

 person.email = "briannozir@gmail.com"

 

 console.log(person.firstName,person.lastName);
 console.log(person.hobbies[0]);
 console.log(person.address.city);
 const {firstName, lastName,age,hobbies,address:{street,city,state}} = person;
 console.log(firstName,lastName);
 console.log(city);


 console.log(person);








 const todos = [
    {
        id:1,
        text: ' take out trash',
        isCompleted: false
    },

    {
        id:2,
        text: 'learn to javascript',
        isCompleted: true
    },

    {
        id:3,
        text: 'learn the process',
        isCompleted: true
    }
 ];

 
 console.log(todos[1].text);
 console.log(todos[2].text);

 const todoJSON = JSON.stringify(todos);// how to send data to server
 console.log(todoJSON); // how to send data to server


 //for loop
 for (let i = 0; i <= 10; i++){
console.log(`For Loop Number: ${i}`);

 }

 //while loop
 let i = 0;
 while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
 }

 for (let i = 0; i < todos.length; i++){
     console.log(todos[i].text);
 }

 //new method calling array
 //much simplier

 for (let todo of todos) {
     console.log(todo.id);
 }

 //forEach,map,filter

 //for each

todos.forEach(function(todo) {
    console.log(todo.text);
 
});
//map
const todoText = todos.map(function(todo) {
    return todo.text;
 
}); 

console.log(todoText);

//filter

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
 
}).map(function(todo) {
    return todo.text
})

console.log(todoCompleted);


const x = 4;
const y = 10;
if (x === 10) {

    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
}

else {
    console.log ('x is less than 10');
}

const a = 3;
const b = 11;

if (a > 5 || b > 10) { // or means any of a or b must be true
    console.log('a is more than 5 or b is more than 10');
}

if (a > 5 && b > 10) { // and means but a and b must be true
    console.log('a is more than 5 or b is more than 10');
    
} else {
    console.log('a or b not meet the requirement to be true');
}


const c = 10;

const color = c > 21 ? 'red' : 'gray';

console.log(color);

switch(color) {
    case 'red':
    console.log('the color is red');
    break;

    case 'gray':
    console.log('the color is gray');
    break;
    default:
        console.log('the color is not red or gray');
        break;
}

const  addNums =(num1 = 2, num2 = 3) =>num1 + num2;
console.log(addNums(2, 5));

todos.forEach((todo) => console.log(todo));

//OOP
//constructor function
/* function Person(firstName,lastName,dob){
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob); //get the date



//this.getBirthYear = function (){
 //   return this.dob.getFullYear();

//}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

//this.getFullName = function (){
  //  return `${firstName}, ${lastName}`;

//}

Person.prototype.getFullName = function() {
    return `${firstName},${lastName}`;
}


}
 */

//Class
class Person {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
}
getBirthYear() {
    return this.dob.getFullYear();
}

getFullName() {
    return `${this.firstName},${this.lastName}`;
}

}


//instantiate object
const person1 = new Person('Brian', 'Rizon', '6-08-1992');
const person2 = new Person('CarlisleBrienne', 'Rizon', '5-27-2019');
console.log(person1.getBirthYear());
console.log(person2.getFullName());



console.log(window);

//Single Elements selector
console.log(document.getElementById('my-form'));

console.log(document.querySelector('h1'));

const form = document.getElementById('my-form');
console.log(form);

//Multiple Elements selector
console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brienne';
//ul.children[2].innerHTML = '<h2>Gwapo</h2>';


//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
e.preventDefault(); 


document.querySelector('#my-form').style.background = '#ccc';

document.querySelector('body').classList.add('bg-dark');
document.querySelector('.items').lastElementChild.innerHTML = '<h1>Gwapo</h1>'
    console.log(e.target.className);

});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild  
    }
}


//HIGHER ORDER
