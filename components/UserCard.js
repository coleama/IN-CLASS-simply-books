import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function UserInfo() {
  const { user } = useAuth();
  console.warn(user);
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.photoURL} alt={user.displayName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p>{user.email}</p>
        <p>{user.metadata.lastSignInTime}</p>
      </Card.Body>
    </Card>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    displayName: PropTypes.string,
  }).isRequired,
};
