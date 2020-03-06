const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String, 
        required: true
    },    
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);