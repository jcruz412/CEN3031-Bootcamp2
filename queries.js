/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/

mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    async function find() {
        const listing = await Listing.find({ name: 'Library West' });
        console.log(listing);
    }
    find();
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    async function remove() {
        const listing = await Listing.findOneAndDelete({ code: 'CABL' });
        if (listing === null) {
            console.log("Listing has already deleted");
        } else {
            console.log(listing);
        }
    }
    remove();

};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

    async function update() {
        const newAddress = { address: '1953 Museum Rd, Gainesville, FL 32603' };
        let listing = await Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, newAddress, { new: true });
        console.log(listing);
    }
    update();
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    async function retrieveAll() {
        const newAddress = { address: '1953 Museum Rd, Gainesville, FL 32603' };
        let listing = await Listing.find();
        listing.forEach(function (document) {
            console.log(document);
        });
    }
    retrieveAll();
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
