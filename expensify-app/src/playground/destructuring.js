// const person = {
//   name: 'Andrew',
//   age: 26,

//   location: {

//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// console.log(`${person.name} is ${person.age}.`);

// const {city, temp: temperature} = person.location;
// if (city, temperature) {
//      console.log(`it's ${temperature} in ${city}.`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };

// const {name:publishersName='Self-Published'} = book.publisher;
// console.log(publishersName);

//array destructuring

// const address =['1299 south juniper street', 'Philidelphia', 'PA','19147']
// const [street, city,state,zip] = address

// // you can skip items that removing the name and keep the comma
// //const [, city,state='new york',zip] = address
// console.log(`you are in ${city}, ${state}`);


 const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

 const [item, ,mediumPrice] = items
 console.log(`A medium ${item} cost ${mediumPrice}`)