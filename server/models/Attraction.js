const mongoose = require('mongoose');

const { Schema } = mongoose;

const attractionSchema = new Schema({
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
  Location: {
    type: Schema.Types.ObjectId,
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

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;
