import { createContext, useContext } from 'react';

const { Provider } = createContext();

const TravelProvider = ({ children }) => {
  const initialState = {
    user: null,
    destinations: [],
    selectedDestination: null,
    tripStartDate: null,
    tripEndDate: null,
    tripBudget: null,
    tripActivities: [],
  };

  return <Provider value={initialState}>{children}</Provider>;
};

const useTravelContext = () => {
  return useContext(createContext());
};

export { TravelProvider, useTravelContext };