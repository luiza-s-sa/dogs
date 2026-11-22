import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router';
import User from '../User/User';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
