import { useReducer } from "react";
import {
  UPDATE_DESTINATIONS ,
 ADD_TO_ITINERARY ,
 UPDATE_ITINERARY_ITEM ,
 REMOVE_FROM_ITINERARY ,
 ADD_MULTIPLE_DESTINATIONS ,
 UPDATE_CATEGORIES ,
 UPDATE_CURRENT_CATEGORY ,
 CLEAR_ITINERARY,
 TOGGLE_CART 
} from "./actions";

const initialState = {
  destinations: [],
  itinerary: [],
  cartOpen: false,
  categories: [],
  currentCategory: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DESTINATIONS:
      return {
        ...state,
        destinations: [...action.destinations],
      };

    case ADD_TO_ITINERARY:
      return {
        ...state,
        itinerary: [...state.itinerary, action.item],
      };

    case ADD_MULTIPLE_DESTINATIONS:
      return {
        ...state,
        destinations: [...state.destinations, ...action.destinations],
      };

    case UPDATE_ITINERARY_ITEM:
      return {
        ...state,
        itinerary: state.itinerary.map(item => {
          if (action.id === item.id) {
            item.quantity = action.quantity
          }
          return item
        })
      };

    case REMOVE_FROM_ITINERARY:
      let newItinerary = state.itinerary.filter(item => {
        return item.id !== action.id;
      });

      return {
        ...state,
        cartOpen: newItinerary.length > 0,
        itinerary: newItinerary
      };

    case CLEAR_ITINERARY:
      return {
        ...state,
        cartOpen: false,
        itinerary: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};