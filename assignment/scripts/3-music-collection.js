console.log('***** Music Collection *****')

let collection = []; //declare global array 'collection' as empty array

function addToCollection( title, artist, yearPublished, tracks ) { //name function and define parameters
    collection.push({title: title, artist: artist, yearPublished: yearPublished, tracks: tracks }); //add album to 'collection' array
    return collection[collection.length-1] //return album as result of function
} //end AddToCollection function

addToCollection('Ready to Die', 'Notorious BIG', '1994', [{name: 'Intro', duration: '3:24'}, {name: 'Things Done Changed', duration: '3:58'}, {name: 'Gimme the Loot', duration: '4:46'}]); //add Biggie
addToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996'); //add MM
addToCollection('The Lonesome Crowded West', 'Modest Mouse', '1997'); //add MMx2
addToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967'); //add Velvets
addToCollection('Loveless', 'My Bloody Valentine', '1991'); //add MBV
addToCollection('Marquee Moon', 'Television', '1977'); //add Television
addToCollection('The Modern Lovers', 'The Modern Lovers', '1976'); //add Jonathan Richman
addToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004'); //add Nick Cave

console.log(collection); //test full array



function showCollection(anyArray){ //name function and set parameters
    console.log('Number of objects in this array is:', anyArray.length); //log number of array items
    for (i=0; i<collection.length; i++){ //start for loop
        console.log(`${anyArray[i].title} by ${anyArray[i].artist}, published in ${anyArray[i].yearPublished}`); //log each array item individually
    }//end loop
} //end showCollection function

showCollection(collection); //log to test function





function search(artist, yearPublished){ //declare function and assign parameter
    let searchArray = []; //declare new blank array
    if ((typeof artist === 'undefined' || typeof yearPublished === 'undefined')){ //set conditional in case either parameter is undefined
        return collection; //if either parameter is undefined, return original collection
    } else { //else
    for (i=0; i<collection.length; i++){ //start for loop
        if (collection[i].artist === artist && collection[i].yearPublished === yearPublished) //check to exact match both imput parameters agaist original array values
            searchArray.push(collection[i]); //for matching results, push to new array
        } //end for loop
    } //end else
    return searchArray; //return new array, displaying any additions, or empty if parameters are filled but not matched
} //end search function

console.log(search()); //test with no assigned arguments
console.log(search('Modest Mouse')); //test with only one argument set
console.log(search('Modest Mouse', '1996')); //test with two matchable arguments
console.log(search('Modest Mous', '1996')); //test with spelling error for unmatched
console.log(search('Modest Mouse', '1995')); //test with numerical error for unmatched

