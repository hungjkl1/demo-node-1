import React from "react";
import { Col, Row, Card, Button, Form, Image } from "react-bootstrap";
import image from "../Home/image.json";
const Contact = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <hr />
          <h1>MEET OUR TEAM</h1>
          <hr />
        </div>
      </div>
      <Row>
        {image.founders.map(item => {
          return (
            <Col sm={12} md={6}>
              <Card style={{ width: "100%" }} className="card mt-4">
                <Card.Img variant="top" src={item.url} className="card__img" />
                <Card.Body>
                  <Card.Title className="card__title">{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Liên hệ</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row>
        <Col md={12} className="banner-watch">
          <Image src="img/watch-banner.jpg" fluid></Image>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={6} sm={12}>
          <h2>CONTACT US</h2>
          <Form className="mt-4">
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="contact-form"
            >
              <Form.Control defaultValue="Email" />
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="contact-form"
            >
              <Form.Control defaultValue="Phone Number" />
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formPlaintextEmail"
              className="contact-form"
            >
              <Form.Control
                as="textarea"
                defaultValue="Your Message Here..."
                className="text-area"
              />
            </Form.Group>
            <Button variant="outline-primary" block>Send</Button>            
          </Form>
        </Col>
        <Col md={6} sm={12} className='policy'>
          <h2>POLICY</h2>
          <div className='policy-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fermentum convallis nibh, feugiat vestibulum sapien tempus et.
            Aliquam eleifend est sed elementum pulvinar. Quisque at sollicitudin
            purus. Nullam finibus tempor congue. Donec facilisis risus quam, at
            aliquam nisl commodo id. Nullam tristique lectus augue, sed cursus
            enim eleifend at. Etiam blandit cursus enim sed ullamcorper.
            Phasellus euismod a justo at dictum. Aliquam ullamcorper tortor sed
            aliquam condimentum. Maecenas nec quam velit. Integer vitae ligula
            enim. Donec ultricies convallis libero, eget ultricies sem iaculis
            et. Integer nec turpis eget ex gravida facilisis.
            <br />
            <br />
            In tempus imperdiet nulla, at dapibus dolor scelerisque eu. Donec
            aliquam lectus ut dapibus aliquam. Nulla efficitur id metus vitae
            imperdiet. Suspendisse potenti. Suspendisse non auctor ante.
            Pellentesque condimentum sem ut pretium efficitur. Quisque ut quam
            pulvinar, varius orci at, sodales tortor. Duis velit arcu, venenatis
            sed ultrices vitae, dapibus et metus.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
