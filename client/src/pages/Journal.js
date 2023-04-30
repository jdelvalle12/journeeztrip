import React from 'react';
import Journal from '../components/Journal/JournalEntries';
import { Navbar } from 'react-bootstrap';


function JournalPage() {
    return (
      <div>
        <Navbar.Brand className='brand-name-journal text-4xl font-bold text-blue-800' href="/Profile">EZ</Navbar.Brand>
        <h1 className='text-4xl font-bold text-blue-800 ml-10 mt-5'>My Travel Journal</h1>
        <Journal />
      </div>
    );
  }
  
  export default JournalPage;