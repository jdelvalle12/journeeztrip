import { Row, Col } from 'react-bootstrap';
import BlogCards from './BlogCards';
import Passport from '../../images/passport.jpg';
import Canyon from '../../images/grandcanyon.jpg';
import Cruises from '../../images/cruises.jpg';

function BlogSetup() {
  const blogPosts = [
    { id: 1, title: 'Getting a Passport', image: Passport, excerpt: 'Getting your passport is diffcult to get now as there is a backlog.' },
    { id: 2, title: 'Hiking in the Grand Canyon', image: Canyon, excerpt: 'Hiking the Grand Canyon was incredible and views were breathtaking.' },
    { id: 3, title: 'Cruising Away', image: Cruises, excerpt: 'Never traveled before? Going on a cruise is a good start.' },
  ];

  return (
    <div className="blogs-page">
      <Row>
        {blogPosts.map(post => (
          <Col sm={4} key={post.id}>
            <BlogCards className='blog-card'
              title={post.title}
              image={post.image}
              excerpt={post.excerpt}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogSetup;