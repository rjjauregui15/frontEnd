//console.log('Success');  

// varables 
// var color = "red";
// console.log(color);

// let age = 30;
// console.log(age);

// let age;
// age = 40;

// Constant
// const pi = 3.14

// Primative Data types
// let name = `jose`;
// let age = 31;
// let loveCates = true;
// let color = null;
// let list = undefined; 

// name = name + ' Smith';

// let message = `${name} is ${age}`

// console.log(message);


//refrnece types 

//Array literals

// const numbers = [1,2,3,4,5]     //new Array(1,2,3,4,5);

// numbers[2] = 9; 
// console.log(numbers)

// const colors = [`red`, `blue`, `pink`, `orange`];


// colors.push(`white`);
// console.log(colors.length);


// Object Literals

// let firstName = `John`;
// let lastName = 'Lopez';
// let age = 29;

// const person = {
//     firstName: `John`,
//     lastName: `smoith`,
//     age: 33,
//     pets: [`dogs`, `cats`],
//     address: {
//         street: `123 mm ave`,
//         city: `fillmore`
//     }

// }

// let key = `firstName`

// console.log(person.lastName);

// console.log(person[key]);

// person.email = `johnnny@email.com`

// delete person.age;

// console.log(person);

// const {firstName, lastName, address: {city}} = person;

// console.log(firstName, lastName);


 
// const people = [
//     {
//         firstName: `John`,
//         lastName: `smoith`,
//         age: 33,
//         pets: [`dogs`, `cats`],
//         address: {
//         street: `123 mm ave`,
//         city: `fillmore`
//         }
//     },
//     {
//         firstName: `Marry`,
//         lastName: `smoith`,
//         age: 31,
//         pets: [`dogs`, `cats`],
//         address: {
//         street: `123 mm ave`,
//         city: `fillmore`
//         }
//     }
// ]

// console.log(people);

// const peopleJSON = JSON.stringify(people);

// console.log(peopleJSON);


// console.log(JSON.parse(peopleJSON));


// // ctions

// // function hello(name){
// //     console.log(`HelloWord ${name}`);
// // }

// // hello(`Tom`);


// // function converPercentage(num){
// //     return num / 100;
// // }

// // console.log(converPercentage(55));
 

// //errow function

// const converPercentage = num => num / 200;

// console.log(converPercentage(43));


// // loops

// // while loop same

// // for loop is the same

// for(let index = 0; index < people.length; index++){
//     console.log(people[index].firstName);
// }

// // prints out age of each object in arrray

// for (let person of people){
//     console.log(person.age)
// }

// // prints out age of each object in arrray

//  people.forEach(function(person){
//      console.log(person.age);
//  });

//  // prints out age of each object in arrray 

//  people.forEach(person => console.log(person.age));


// // this returns new array of ages 

//  const perosnName = people.map(person => person.age);

//  console.log(perosnName);

//  // returns array of objects with age less than 35

//  const personAgeUnder30 = people.filter(person => person.age < 35);

//  console.log(personAgeUnder30);

// Conditionsals - same as other except (== vs ===)

// let animal = 'cat';
// const likesCats = animal === 'cat' ? true : false;
// console.log(likesCats); 


// DOM - Document Object Model
//  const list = document.getElementById("list");
//  console.log(list);

 
//  const list = document.querySelector('ul');
//  console.log(list);


// const list = document.querySelector('#list');  // . for class 
// const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);
 
// for (let item of listItems){
//     console.log(item.textContent);
// }

// listItems.forEach(item => {
//     console.log(item);
// })


// console.log(list);

// list.lastElementChild.remove();

// list.firstElementChild.textContent = 'the new new item';

// list.lastElementchild 

// list.firstElementChild.innerHTML = "<h1> New header iteam </h1>";

// list.firstElementChild.style.background = "red";


//Events

const btn = document.getElementById('myBtn');

// btn.addEventListener('click', function(e){
//     console.log(e);
// });

//same as above
btn.addEventListener('click', (e) => {
     console.log(e);
 });

 btn.addEventListener('mouseover', (e) => {
     btn.style.background = 'blue'; 
});

btn.addEventListener('mouseout', (e) => {
    btn.style.background = 'pink';
})




