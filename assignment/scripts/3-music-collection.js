console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ) {
    let album= {
    theTitle: title,
    theArtist: artist,
    theYearPublished: yearPublished
    }
    collection.push(album);
    return album
} // end addToCollection

console.log(addToCollection('Ready to Die', 'Notorious BIG', '1994'));
console.log(collection);


addToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996');
addToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967');
addToCollection('Loveless', 'My Bloody Valentine', '1991');
addToCollection('Marquee Moon', 'Television', '1977');
addToCollection('The Modern Lovers', 'The Modern Loves', '1976');
addToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004');