import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { RatingView } from 'react-simple-star-rating';
// import {money} from 'react-icons-kit/fa/money'

const SingleReview = (props) => {
    const {name, email,rating,comment}= props.review
    return (
        <div className="my-5">
            {/* <Col> */}
      <Card className="mx-5 mt-5 cards services">
        {/* <Card.Img variant="top"  src={img} /> */}
        <Card.Body>
          <Card.Title className="text-center">{name} </Card.Title>
          <Card.Text className="text-center">
          </Card.Text>
          <Card.Text className="">
           {email}
          </Card.Text>
          
          <Card.Text className="texts-colors d-flex justify-content-around text-start">
          <div>
          <RatingView ratingValue={rating} /* RatingView Props */ />

          </div>
        
          </Card.Text>
          <Card.Text className="text-center ">
              {comment}
          </Card.Text>
        </Card.Body>
      </Card>
    {/* </Col> */}
        </div>
    );
};

export default SingleReview;