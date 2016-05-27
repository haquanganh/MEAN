var mongoose   = require('mongoose');
var ObjectId   = mongoose.Schema.Types.ObjectId;

var schema     = mongoose.Schema({
    title        : { type: 'String', required: true, index: true },
    content      : { type: 'String', required: true },
    author       : { type: 'String', required: true },
    creationDate : { type: Date, default: Date.now}
});
module.exports = mongoose.model('Posts', schema);
