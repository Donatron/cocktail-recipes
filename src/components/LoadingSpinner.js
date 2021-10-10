import React from 'react';
import { Spinner } from 'reactstrap';

export const LoadingSpinner = () => {
  return (
    <div className="" style={{ marginTop: "250px", height: "100vh" }}>
      <Spinner color="info" />
    </div>
  )
}

export default LoadingSpinner;