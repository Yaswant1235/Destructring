
//Function to remove duplicates from an array

array = [2, 3, 4, 3, 5, 6, 7, 7, 5];
function removeDuplicates(array){
    let uniqueItems = new Set(); //create a new set
    for (let i = 0; i < array.length; i++) { //loop through array
        uniqueItems.add(array[i]); //add each item to the set
    }
    return uniqueItems; //return the set
}
console.log(removeDuplicates(array));