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


function findByArtist(artist){ //name function and set parameter
    let findByArtistArray=[]; //set new blank array
    for (i=0; i<collection.length; i++){ //start for loop to check each item
        if (collection[i].artist === artist){ //use conditional to search for exact matches of artist names
            findByArtistArray.push(collection[i]); //push function to add results to blank array
        } //end conditional
    } //end for loop
        return findByArtistArray; //return function to add result to new blank array
} // end findByArtist function

console.log(findByArtist('Nick Cave & The Bad Seeds')); //test for artist at end of array to ensure full array is searched
console.log(findByArtist('Modest Mouse')); //test for search of artist with multiple results
console.log(findByArtist('Modest Mous')); //test for artist not included by using misspelling

