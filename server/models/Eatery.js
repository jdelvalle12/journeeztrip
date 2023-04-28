const mongoose = require('mongoose');

const { Schema } = mongoose;

const eaterySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },  
  Location: {
    type: Schema.Types.ObjectId,
    enum: ['Point'],
    ref: 'Location',
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  marker: {
    type: {
      type: String,
      enum: ['Feature'],
      default: 'Feature'
    },
    geometry: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    properties: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
});

const Eatery = mongoose.model('Eatery', eaterySchema);

module.exports = Eatery;