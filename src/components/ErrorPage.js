import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h2>OOPS something went wrong!!</h2>
      <h3>{error.status + ' : ' + error.statusText}</h3>
    </div>
  );
};

export default ErrorPage;
