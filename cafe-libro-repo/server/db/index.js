const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

//const givenUri = 'mongodb://127.0.0.1:27017/items';

mongoose
    .connect(uri, { useNewUrlParser: true})
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;
console.log(db.collection)

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!');
    console.log(db.collections);
})

module.exports = db;
