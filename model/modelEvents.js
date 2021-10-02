const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('event', new Schema({
    title:{
        type:String
    },
    date:{
        type:String
    },
    place:{
        type:String
    }
}))