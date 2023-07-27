console.log("test start")
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId

const Id = '64beccf3811ab7207a3dc2a8';

if (objectId.isValid(Id)) {
    console.log("Id is valid")
}

// const contact = Contact.findById(Id);
// if (!contact) {
//     console.log("test working");
// } else {
//     console.log(contact.name);
// }
const contacts =  Contact.find();
console.log(contacts.name);
Contact.findById(Id).then((result) => {
    if (!result) {
        console.log('No item found');
    } else {
        console.log('Item forund : ', result);
    }
}).catch((err) => {
    console.log('Error occurred : ', err);
});