import React from 'react';
import { Row, Col } from 'reactstrap';

const CocktailGlassType = ({ glassType }) => {
  return (
    <Row>
      <Col className="cocktail-details_details-glass">
        <h4>Glass Type</h4>
        <div className="">
          <p>{glassType}</p>
        </div>
      </Col>
    </Row>
  );
}

export default CocktailGlassType;