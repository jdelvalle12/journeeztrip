import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Blogs() {

    return (
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Blog 1</Card.Title>
                  <Card.Text>
                    This is a sample blog post. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce eget justo sit amet arcu
                    feugiat semper.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Blog 2</Card.Title>
                  <Card.Text>
                    This is another sample blog post. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce eget justo sit amet arcu
                    feugiat semper.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Blog 3</Card.Title>
                  <Card.Text>
                    This is a third sample blog post. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Fusce eget justo sit amet arcu
                    feugiat semper.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }