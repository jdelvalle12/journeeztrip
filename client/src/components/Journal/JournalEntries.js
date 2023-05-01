import React, { useState, useEffect } from 'react';
import JournalEntry from './JournalEntry';

function Journal() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [newEntryDate, setNewEntryDate] = useState('');
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  useEffect(() => {
    // Code to fetch journal entries from database goes here
    // Example:
    setJournalEntries([
      {
        id: 1,
        date: '2018-09-14',
        title: 'My first day in Paris',
        content: 'I arrived in Paris today and it was amazing!',
      },
      {
        id: 2,
        date: '2018-09-15',
        title: 'Exploring the city',
        content: 'I went to the Eiffel Tower and the Louvre Museum.',
      },
      {
        id: 3,
        date: '2018-10-12',
        title: 'Birthday Celebration',
        content: 'Celebrated my 30th in Greece!',
      },
    ]);
  }, []);

  const handleAddEntryClick = () => {
    setIsAddingEntry(true);
  };

  const handleNewEntryDateChange = (e) => {
    setNewEntryDate(e.target.value);
  };

  const handleNewEntryTitleChange = (e) => {
    setNewEntryTitle(e.target.value);
  };

  const handleNewEntryContentChange = (e) => {
    setNewEntryContent(e.target.value);
  };

  const handleNewEntrySubmit = (e) => {
    e.preventDefault();
    // Code to save new entry to database goes here
    const newEntry = {
      id: journalEntries.length + 1,
      date: newEntryDate,
      title: newEntryTitle,
      content: newEntryContent,
    };
    setJournalEntries([...journalEntries, newEntry]);
    setIsAddingEntry(false);
    setNewEntryDate('');
    setNewEntryTitle('');
    setNewEntryContent('');
  };

  return (
    <div className='journal-container'>
      {/* <h2>My Journal</h2> */}
      {isAddingEntry ? (
        <form onSubmit={handleNewEntrySubmit}>
          <label htmlFor="new-entry-date">Date:</label>
          <input type="date" id="new-entry-date" value={newEntryDate} onChange={handleNewEntryDateChange} />
          <br />
          <label htmlFor="new-entry-title">Title:</label>
          <input type="text" id="new-entry-title" value={newEntryTitle} onChange={handleNewEntryTitleChange} />
          <br />
          <label htmlFor="new-entry-content">Content:</label>
          <textarea id="new-entry-content" value={newEntryContent} onChange={handleNewEntryContentChange}></textarea>
          <br />
          <button type="submit">Save</button>
        </form>
      ) : (
        <button onClick={handleAddEntryClick}>Add Entry</button>
      )}
      <div className='journal-entries'>
        {journalEntries.map((entry) => (
          <JournalEntry
            key={entry.id}
            date={entry.date}
            title={entry.title}
            content={entry.content}
          />
        ))}
      </div>
  </div>
  );
}

export default Journal;