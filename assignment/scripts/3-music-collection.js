console.log('***** Music Collection *****')

let collection = []; //declare global array 'collection' as empty array

function addToCollection(title, artist, yearPublished) { //name function and define parameters
    collection.push({title, artist, yearPublished}); //add album to 'collection' array
    return collection[collection.length-1] //return album as result of function
} //end AddToCollection function

console.log(addToCollection('Ready to Die', 'Notorious BIG', '1994')); //add Biggie
console.log(addToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996')); //add MM
console.log(addToCollection('The Lonesome Crowded West', 'Modest Mouse', '1997')); //add MMx2
console.log(addToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967')); //add Velvets
console.log(addToCollection('Loveless', 'My Bloody Valentine', '1991')); //add MBV
console.log(addToCollection('Marquee Moon', 'Television', '1977')); //add Television
console.log(addToCollection('The Modern Lovers', 'The Modern Lovers', '1976')); //add Jonathan Richman
console.log(addToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004')); //add Nick Cave

console.log(collection); //test full array

function showCollection(anyArray){ //name function and set parameters
    console.log('Number of objects in this array is:', anyArray.length); //log number of array items
    for (i=0; i<collection.length; i++){ //start for loop
        console.log(`${anyArray[i].title} by ${anyArray[i].artist}, published in ${anyArray[i].yearPublished}`); //log each array item individually
    }//end loop
} //end showCollection function

showCollection(collection); //log to test function

