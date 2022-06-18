import { compose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce } from 'immer';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`; // this is called currying
const toLowerCase = str => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input))); no longer need if you use compose and pipe
let input = '  Javascript  ';

const transform = compose(wrap, toLowerCase, trim);

const transformToo = pipe(trim, toLowerCase, wrap('span'));

console.log(transformToo(input));

// Immutability

const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco',
  },
};
Object.assign({}, person, { name: 'Bob', age: 37 }); //copies the person object into an empty object
// Another way of copying is the use of spread operator

const updatedPerson = {
  ...person,
  name: 'Bob',
  age: 37,
  address: {
    ...person.address,
    city: 'New York',
  },
};
//console.log(updatedPerson);

//both these methods produce a shallow copy
//if you change the address in the updatedPerson with

// updatedPerson.address.city = 'New York';
// console.log(person);
// the city of person object is also updated to New York
// to avoid thi you have to do a depp copy

console.log(person, updatedPerson);

const numbers = [1, 2, 3];

//adding

const added = [...numbers, 3, 5, 7];
//adding in front
const addNew = [5, ...numbers];

//adding in the between 1 and 2
const index = numbers.indexOf(2);
const addMid = [...numbers.slice(0, index), 5, ...numbers.slice(index)];

console.log(added, addNew, addMid);

//Removing an item in an array
const removed = numbers.filter(n => n !== 2);

// removes the number "2" in the array of 1,2,3
// filter returns an array that filters based on the
//callback method passed in this case all numbers will pass if it is not equal to 2,
//any instance of 2 in the array is removed

console.log(removed);

//Updating an array

const updated = numbers.map(n => (n === 2 ? 20 : n));
console.log(updated);

//IMMUTABLE

//let book = Map({ title: 'Harry Potter' });

// function publish(book) {
//   book.isPublished = true;
// }

// function publish(book) {
//   return book.set('isPublished', true);
// }
// book = publish(book);
// console.log(book.get('title'));
// console.log(book.toJS());

//IMMER

let book = { title: 'Nerds of Wars' };
function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);
