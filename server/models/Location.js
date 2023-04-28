const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  markers: [{
    type: String, // Type of marker: 'eatery', 'lodging', or 'attraction'
    markerId: {
      type: Schema.Types.ObjectId, // Reference to the _id of the marker object
      required: true,
    }
  }]
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
