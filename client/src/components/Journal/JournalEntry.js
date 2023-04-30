import React, { useState } from 'react';

function JournalEntry({ date, title, content }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  


  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to save updated entry to database goes here
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

 
  return (

    <div className='journal-entry'>
      <div className='journal-entry-header'>
        <h3>{date}</h3>
        {isEditing ? (
          <button onClick={handleSubmit}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
      {isEditing ? (
        <>
          <input value={updatedTitle} onChange={handleTitleChange} />
          <textarea value={updatedContent} onChange={handleContentChange} />
        </>
      ) : (
        <>
          <h4>{title}</h4>
          <p>{content}</p>
        </>
      )}
    </div>
  );
}

export default JournalEntry;