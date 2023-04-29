import React, { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';


const isLoggedIn = true; // or false, depending on the user's authentication status
const userName = " "; // or whatever the user's name is

export default function Profile() {

    const handleDownload = (event) => {
        // add code to download the photo file
      }

  const [blogPost, setBlogPost] = useState('');

  const handleBlogPostChange = (event) => {
    setBlogPost(event.target.value);
  }

  const handleBlogPostSubmit = (event) => {
    event.preventDefault();
    // add code to submit the blog post to your backend server
  }

  return (
    <div>
      <h1 className='welcome-heading'>
        {isLoggedIn ? `Welcome ${userName}!` : 'Profile Page'}
      </h1>

      <Navbar className='profile-menu-container' bg="light" expand="lg">
        <Navbar.Brand className='brand-name' to="#home">JourneEZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="profile-menu-items mr-auto">
            <Nav.Link to="#planner">Planner</Nav.Link>
            <Nav.Link to="#journal">Journal</Nav.Link>
            <Nav.Link onClick={handleDownload}>Download Photo</Nav.Link>
            <Nav.Link to="#photos">Photos</Nav.Link>
            <Nav.Link to="#budget">Budget</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Form className='blogpost-container' onSubmit={handleBlogPostSubmit}>
        <Form.Group controlId="blogPost">
          <Form.Label>Blog Post</Form.Label>
          <Form.Control as="textarea" rows={3} value={blogPost} onChange={handleBlogPostChange} />
        </Form.Group>
        <Button className='blogpost-button' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}