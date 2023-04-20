// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements.

const array=[1,2,3,4,3,5,5,6];
// Function to remove duplicates from an array 
function removeDuplicates(array){ 
    let uniqueArray = []; 
    
    // Iterate through the array 
    array.forEach(function(item) { 
      // Check if the item exists in the uniqueArray 
      if(uniqueArray.indexOf(item) < 0) { 
        // If not, add it to the array 
        uniqueArray.push(item); 
      } 
    }); 
    
    return uniqueArray; 
  }
  
  console.log(removeDuplicates(array));