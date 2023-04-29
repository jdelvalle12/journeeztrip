import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Blogs from './pages/Blogs';
import Explore from "./pages/Explore";
import Language from './pages/Language';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { TravelProvider } from './utils/GlobalState';
import './index.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <TravelProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/About" 
                element={<About />} 
              />
              <Route 
                path="/Blogs" 
                element={<Blogs />} 
              />
              <Route 
                path="/Explore" 
                element={<Explore />} 
              />
              <Route 
                path="/Language" 
                element={<Language />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
              <Route 
                path="/Shop" 
                element={<Shop />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </TravelProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
