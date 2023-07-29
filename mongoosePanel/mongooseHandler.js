const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/library", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const libroScheme = mongoose.Schema({
    name : String,
    author : String,
    description: String,
    id: Number

}
,
{
    collection:'library'
});

const mold = mongoose.model('Book', libroScheme);

module.exports = mold;