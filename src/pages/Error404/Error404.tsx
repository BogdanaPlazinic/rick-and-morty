import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
    <div >
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
    )
};

export default Error404;