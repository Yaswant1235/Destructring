// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.



const person = {
    name: {
      first: 'John',
      last: 'Doe'
    },
    address: {
      street: 'Main St.',
      city: 'New York',
      state: 'NY'
    }
   };
   
  function getNameAndStreet(person) {
    const {name: {first, last}, address: {street}} = person;
    return {name: `${first} ${last}`, street};
  }
 console.log(getNameAndStreet(person)); 