console.log('***** Music Collection *****')

let collection = []; //declare global array 'collection' as empty array

function AddToCollection(title, artist, yearPublished) { //name function and define parameters
    collection.push({title, artist, yearPublished}); //add album to 'collection' array
    return collection[collection.length-1] //return album as result of function
} //end AddToCollection function

AddToCollection('Ready to Die', 'Notorious BIG', '1994'); //add Biggie
AddToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996'); //add MM
AddToCollection('The Lonesome Crowded West', 'Modest Mouse', '1997'); //add MMx2
AddToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967'); //add Velvets
AddToCollection('Loveless', 'My Bloody Valentine', '1991'); //add MBV
AddToCollection('Marquee Moon', 'Television', '1977'); //add Television
AddToCollection('The Modern Lovers', 'The Modern Lovers', '1976'); //add Jonathan Richman
AddToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004'); //add Nick Cave

console.log(collection); //test full array

