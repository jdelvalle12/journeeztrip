const { AuthenticationError } = require('apollo-server-express');
const { User, Location, Lodging, Attraction, Eatery } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    locations: async () => {
      return await Location.find();
    },
    lodgings: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Lodging.find(params).populate('location');
    },
    attractions: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Attraction.find(params).populate('location');
    },
    eateries: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Eatery.find(params).populate('location');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'location'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
      // Define resolver function for querying journalEntries
      journalEntries: () => {
        // Code to fetch journal entries from database goes here
        const journalEntries = [
          { id: 1, date: "2022-04-29", title: "First entry", content: "This is my first entry" },
          { id: 2, date: "2022-04-30", title: "Second entry", content: "This is my second entry" },
        ];
        return journalEntries;
      }, 
    },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // existing mutation resolvers here
    addLodging: async (parent, args, context) => {
      if (context.user) {
        const locationExists = await Location.exists({ _id: args.locationId });

      if (!locationExists) {
      throw new UserInputError('Invalid location ID');
      }
        const lodging = await Lodging.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { lodgings: lodging._id } });

        return lodging;
      }

      throw new AuthenticationError('Not logged in');
    },
    addAttraction: async (parent, args, context) => {
      if (context.user) {

        const locationExists = await Location.exists({ _id: args.locationId });

        if (!locationExists) {
        throw new UserInputError('Invalid location ID');
        }

        const attraction = await Attraction.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { attractions: attraction._id } });

        return attraction;
      }

      throw new AuthenticationError('Not logged in');
    },
    addEatery: async (parent, args, context) => {
      if (context.user) {

        const locationExists = await Location.exists({ _id: args.locationId });

        if (!locationExists) {
        throw new UserInputError('Invalid location ID');
        }

        const eatery = await Eatery.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { eateries: eatery._id } });

        return eatery;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateLodging: async (parent, { id, input }, context) => {
      if (context.user) {
        return await Lodging.findByIdAndUpdate(id, input, { new: true }).populate('location');
      }
    
      throw new AuthenticationError('Not logged in');
    },
    updateAttraction: async (parent, { id, input }, context) => {
      if (context.user) {
        return await Attraction.findByIdAndUpdate(id, input, { new: true }).populate('location');
      }

      throw new AuthenticationError('Not logged in');
    },
    updateEatery: async (parent, { id, input }, context) => {
      if (context.user) {
        return await Eatery.findByIdAndUpdate(id, input, { new: true }).populate('location');
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteLodging: async (parent, { _id }, context) => {
      if (context.user) {
        const lodging = await Lodging.findByIdAndDelete(_id).populate('location');
    
        await Location.findByIdAndUpdate(lodging.Location._id, { $pull: { lodgings: _id } });
    
        return lodging;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    deleteAttraction: async (parent, { _id }, context) => {
      if (context.user) {
        const attraction = await Attraction.findByIdAndDelete(_id).populate('location');

        await Location.findByIdAndUpdate(attraction.Location._id, { $pull: { attractions: _id } });

        return attraction;
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteEatery: async (parent, { _id }, context) => {
      if (context.user) {
        const eatery = await Eatery.findByIdAndDelete(_id).populate('location');

        await Location.findByIdAndUpdate(eatery.Location._id, { $pull: { eateries: _id } });

        return eatery;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
      // Define resolver function for creating a new journal entry
      createJournalEntry: (parent, args) => {
        // Code to save new entry to database goes here
        const newEntry = {
          id: journalEntries.length + 1,
          date: args.date,
          title: args.title,
          content: args.content,
        };
        return newEntry;
      }
    },
    JournalEntry: {
      // Define resolver functions for each field of the JournalEntry type
      id: (parent) => parent.id,
      date: (parent) => parent.date,
      title: (parent) => parent.title,
      content: (parent) => parent.content,
    },
  //   createBlog: {
  //     resolve: (_, { title, content, author, tags, category }) => {
  //       const id = blog.length + 1;
  //       const blog = { id, title, content, author, tags, category };
  //       blog.push(blog);
  //       return blog;
  //   },
  // },
};


module.exports = resolvers;
