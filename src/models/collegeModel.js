const mongoose = require("mongoose")
collegeSchema.path('logoLink').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: true,
        required: true,
    },
    logoLink: {
        type: String,
        required: 'URL can\'t be empty'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })
module.exports = mongoose.model('collegeCollection', collegeSchema)