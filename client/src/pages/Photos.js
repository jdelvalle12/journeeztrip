// pages/Photo.js
import React from 'react';
// import Photo from '../components/Photos/index';
// import { Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CEO from '../images/CEO.jpg';
import Eiffel from '../images/eiffeltower.jpg';
import Bridge from '../images/towerbridge.jpg';
import ME from '../images/ME.jpg';
import Florence from '../images/Florence.jpg';
import { Link } from 'react-router-dom';

function Photos() {
  
  
  // const [selectedFile, setSelectedFile] = useState(null);
  
  // const handleUploadFile = (event) => {
    //     event.preventDefault();
    //     // add code to upload the selected file to your backend server
    //   }
    
    // const handleUpload = (event) => {
      //   setSelectedFile(URL.createObjectURL(event.target.files[0]));
      // }
      
      <div className='picture-container'>
        <Link className='brand-name-photos text-4xl font-bold text-blue-800' to="/Profile">EZ</Link>
      {/* <Image src={CEO} alt='Profile picture' style={{ maxWidth: '100%', height: 'auto' }} className='profile-picture' /> */}
        {/* <input type='file' onChange={handleUpload} /> */}
        {/* <Button className='upload-photo-button border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' variant="primary" onClick={handleUploadFile}>Upload Photo</Button> */}
    </div>
    
    const images = [CEO, ME, Eiffel, Bridge, Florence];
   
  

  return (
    <div className='photos-container'>
        <Link className='brand-name-photos text-4xl font-bold text-blue-800' to="/Profile">EZ</Link>
      <h2 className='text-4xl font-bold text-blue-800 ml-10 mt-5'>My Travel Photos</h2>
      {/* <Nav.Link className='upload-photo border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black' onClick={handleUpload}>Upload Photos</Nav.Link> */}
      <div className='photo-grid'>
        {images.map((image) => (
           <Image key={image} src={image} />
        ))}
      </div>
    </div>
  );
}

export default Photos;