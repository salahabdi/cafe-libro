const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        isbn: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publication_year: {
            type: Number,
            required: false
        },
        publisher: {
            type: String,
            required: true
        },
        image_url_s:{
            type: String,
            required: true
        },
        image_url_m:{
            type: String,
            required: true
        },
        image_url_l:{
            type: String,
            required: true
        },
        copies:{
            type: Number,
            required: true
        },
        available:{
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('items', Item);
