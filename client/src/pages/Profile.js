import React, { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CEO from '../images/CEO.jpg';
import Blog from '../pages/Blogs';

const isLoggedIn = true; // or false, depending on the user's authentication status
const name = " "; // or whatever the user's name is
// const handleUploadFile = (event) => {
//   event.preventDefault();
//   // add code to upload the selected file to your backend server
// }

export default function Profile() {

  // const [selectedFile, setSelectedFile] = useState(null);

    

    //  const handleUpload = (event) => {
    //   setSelectedFile(URL.createObjectURL(event.target.files[0]));
    // }

    const [blogPost, setBlogPost] = useState('');
    const [submittedBlogPost, setSubmittedBlogPost] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
   
    
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
    
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
    
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
    
    const handleBlogPostChange = (event) => {
      setBlogPost(event.target.value);
    };
    
    const handleBlogPostSubmit = (event) => {
      event.preventDefault();
      setSubmittedBlogPost(blogPost);
      setTitle('');
      setDate('');
      setCategory('');
      setBlogPost('');
    };

  // const handleBlogPostSubmit = (event) => {
  //   event.preventDefault();
  //   setSubmittedBlogPost(blogPost);
  //   setBlogPost('');
  // };

  // const handleFileSelected = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // }


  // const handleFileInputChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  return (
    <div>
      <h1 className='welcome-heading text-blue-800'>
        {isLoggedIn ? `Welcome ${name}!` : 'Profile Page'}
      </h1>
        <Navbar.Brand className='brand-name-profile text-4xl font-bold text-blue-800' to="/Profile">EZ</Navbar.Brand>

      <div className='profile-picture-container'>
                <Image src={CEO} alt='Profile picture' style={{ maxWidth: '100%', height: 'auto' }} className='profile-picture' />
                {/* <input type='file' onChange={handleUpload} /> */}
                {/* <Button className='upload-photo-button border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' variant="primary" onClick={handleUploadFile}>Upload Photo</Button> */}
      </div>

      <Navbar className='profile-menu-container' bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="profile-menu-items mr-auto">
            <Nav.Link className='planner-item border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' to="/Planner ">Planner</Nav.Link>
            <Nav.Link className='journal border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' to="/Journal">Journal</Nav.Link>            
            <Nav.Link className='photos border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' to="/Photos">Photos</Nav.Link>
            <Nav.Link className='budget border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' to="/Budget">Budget</Nav.Link>
            <Nav.Link className='logout border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' to="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Form className='blogpost-container' onSubmit={handleBlogPostSubmit}>
  <Form.Group controlId="title">
    <Form.Label>Title:</Form.Label>
    <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleTitleChange} />
  </Form.Group>

  <Form.Group controlId="date">
    <Form.Label>Date:</Form.Label>
    <Form.Control type="date" placeholder="Enter date" value={date} onChange={handleDateChange} />
  </Form.Group>

  <Form.Group controlId="category">
    <Form.Label>Category:</Form.Label>
    <Form.Control as="select" value={category} onChange={handleCategoryChange}>
      <option value="beaches">Beaches</option>
      <option value="mountains">Mountains</option>
      <option value="cities">Cities</option>
      <option value="nature">Nature</option>
      <option value="destination">Destination</option>
      <option value="accomodation">Accomodation</option>
      <option value="activities">Activities</option>
      <option value="tips">Tips</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="blogPost">
    <Form.Label>Blog Post:</Form.Label>
    <Form.Control as="textarea" rows={3} value={blogPost} onChange={handleBlogPostChange} />
  </Form.Group>

  <Button className='blogpost-button' variant="primary" type="submit">
    Submit
  </Button>
</Form>
        {submittedBlogPost && <Blog author="Your Name" content={submittedBlogPost} />}
    </div>
  );
}