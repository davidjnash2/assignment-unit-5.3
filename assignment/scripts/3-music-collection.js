console.log('***** Music Collection *****')

let collection = []; //set global array 'collection'

function AddToCollection(title, artist, yearPublished) { //name function and define parameters
    const album = { // start album object
        title: title, //assign title
        artist: artist, //assign artist
        yearPublished: yearPublished //assign yearPublished
    } //end album object
    collection.push(album); //add album to 'collection' array
    return album; //return album as result of function
} //end AddToCollection function

let ReadyToDie = new AddToCollection('Ready to Die', 'Notorious BIG', '1994'); //add Biggie
console.log(ReadyToDie); //test

let LongDrive = new AddToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996'); //add MM
console.log(LongDrive); //test

let Banana = new AddToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967'); //add Velvets
console.log(Banana); //test

let Loveless = new AddToCollection('Loveless', 'My Bloody Valentine', '1991'); //add MBV
console.log(Loveless); //test

let MarqueeMoon = new AddToCollection('Marquee Moon', 'Television', '1977'); //add Television
console.log(MarqueeMoon); //test

let ModernLovers = new AddToCollection('The Modern Lovers', 'The Modern Lovers', '1976'); //add Jonathan Richman
console.log(ModernLovers); //test

let Abbatoir = new AddToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004'); //add Nick Cave
console.log(Abbatoir); //test
console.log(collection); //test full array