console.log('***** Music Collection *****')

let collection = [];

function AddToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

let ReadyToDie = new AddToCollection('Ready to Die', 'Notorious BIG', '1994');
console.log(ReadyToDie);

let LongDrive = new AddToCollection('This is a Long Drive for Someone with Nothing to Think About', 'Modest Mouse', '1996');
console.log(LongDrive);

let Banana = new AddToCollection('The Velvet Underground & Nico', 'The Velvet Underground', '1967');
console.log(Banana);

let Loveless = new AddToCollection('Loveless', 'My Bloody Valentine', '1991');
console.log(Loveless);

let MarqueeMoon = new AddToCollection('Marquee Moon', 'Television', '1977');
console.log(MarqueeMoon);

let ModernLovers = new AddToCollection('The Modern Lovers', 'The Modern Lovers', '1976');
console.log(ModernLovers);

let Abbatoir = new AddToCollection('Abbatoir Blues/The Lyre of Orpheus', 'Nick Cave & The Bad Seeds', '2004');
console.log(Abbatoir);
console.log(collection);