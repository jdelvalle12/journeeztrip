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
import Blogs from './pages/Blogs';
// import Budget from './pages/Budget';
import Explore from "./pages/Explore";
import Journal from './pages/Journal';
import Language from './pages/Language';
import NoMatch from './pages/NoMatch';
import Photos from './pages/Photos';
import Planner from './pages/Planner';
import Profile from './pages/Profile';
// import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { TravelProvider } from './utils/GlobalState';
// import { AuthProvider } from './utils/authContext';
import './index.css';

const httpLink = createHttpLink({
  uri: '/graphql',
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
            {/* <AuthProvider> */}
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/Login" 
                element={<Login />} 
              />
              <Route 
                path="/Signup" 
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
              {/* <Route 
                path="/Budget" 
                element={<Budget />} 
              /> */}
              <Route 
                path="/Explore" 
                element={<Explore />} 
              />
               <Route 
                path="/Journal" 
                element={<Journal />} 
              />
              <Route 
                path="/Language" 
                element={<Language />} 
              />
                <Route 
                path="/Photos" 
                element={<Photos />} 
              />
              <Route 
                path="/Planner" 
                element={<Planner />} 
              />
              <Route 
                path="/Profile" 
                element={<Profile />} 
              />
              {/* <Route 
                path="/Shop" 
                element={<Shop />} 
              /> */}
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
            <Footer />
            {/* </AuthProvider> */}
          </TravelProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
