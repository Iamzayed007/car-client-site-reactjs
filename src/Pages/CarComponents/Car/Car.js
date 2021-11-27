import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Car = (props) => {

    const history = useHistory()

    const { name, img, price, description, _id} = props.car

    const handlePurchase =()=>{
        history.push(`/purchase/${_id}`)
    }
    return (
        <div>
            <Col>


                <Card>
                    <Card.Img variant="top" src={img} height="300" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <Container>
                                <Row>
                                    <Col>
                                    {price}
                                    </Col>

                                    <Col>
                                    <button onClick={handlePurchase} className="btn btn-outline-warning">Buy Now</button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Text>
                        
                        <Card.Text className="text-start">
                        <Accordion defaultActiveKey="1">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Details</Accordion.Header>
    <Accordion.Body className="justify-content-start">
   {description}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

                        </Card.Text>



                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Car;