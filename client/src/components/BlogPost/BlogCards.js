import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function BlogCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.excerpt}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;