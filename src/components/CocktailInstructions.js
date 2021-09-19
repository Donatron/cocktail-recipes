import React from 'react';
import { Row, Col } from 'reactstrap';

const CocktailInstructions = ({ instructions }) => {
  return (
    <Row>
      <Col className="cocktail-details_details-instructions">
        <h4>Instructions</h4>
        <div className="">
          <p>{instructions}</p>
        </div>
      </Col>
    </Row>
  );
}

export default CocktailInstructions;