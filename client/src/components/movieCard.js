import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const MovieCard=(props) => {
  return (
    <div className="col-6 col-sm-4">
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
            <CardTitle>{props.movie.name}</CardTitle>
            <CardSubtitle>{props.movie.actors}</CardSubtitle>
            <CardText>{props.movie.description}</CardText>
            <button className="btn btn-primary">Book tickets</button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;