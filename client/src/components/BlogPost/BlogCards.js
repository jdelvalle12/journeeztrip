import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function BlogCard(props) {
  return (
   <div className="card-container">
    <Card style={{ width: '23rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', border: '2px solid black', borderRadius: '10px', overflow: 'hidden', flexdirection: 'row'}}>
      <Card.Img variant="top" src={props.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
      <Card.Body>
        <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px' }}>{props.title}</Card.Title>
        <Card.Text style={{ fontSize: '14px', lineHeight: '1.5', margin: '10px' }}>
          {props.excerpt}
        </Card.Text>
        <Button className='blog-card-button' variant="primary" style={{ backgroundColor: 'blue', color: 'white', fontSize: '18px', padding: '10px 20px', transition:'opacity 0.2s' }}>Read More</Button>
      </Card.Body>
    </Card>
  </div>
  );
}

export default BlogCard;