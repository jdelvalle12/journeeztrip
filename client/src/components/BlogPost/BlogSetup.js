import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCards from './BlogCards';

function BlogSetup() {
  const blogPosts = [
    { id: 1, title: 'My Trip to Bali', image: 'https://example.com/bali.jpg', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Hiking in the Grand Canyon', image: 'https://example.com/grand-canyon.jpg', excerpt: 'Pellentesque euismod libero vel sapien faucibus, eget ultricies mauris imperdiet.' },
    { id: 3, title: 'Exploring Tokyo', image: 'https://example.com/tokyo.jpg', excerpt: 'Morbi eu risus at odio sagittis faucibus.' },
  ];

  return (
    <div className="blogs-page">
      <Row>
        {blogPosts.map(post => (
          <Col sm={4} key={post.id}>
            <BlogCards
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