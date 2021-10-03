import React from 'react';
import { Row, Col } from 'reactstrap';

const CocktailAlternatives = ({ alternatives }) => {
  return (
    <Row>
      <Col>
        <div className="cocktail-details_details-alternatives">
          <h4>Alternatives</h4>
          <div className="">
            <p>{alternatives}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default CocktailAlternatives;