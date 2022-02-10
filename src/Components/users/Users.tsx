import * as React from 'react';
import { useState } from 'react';

import UserItem from '../../Components/users/userItem';
import { IUserDetails } from '../../utils/types';

// redux
import { useAppSelector } from '../../app/hooks';
import LinearSpinner from '../../Components/Layout/Spinner';
import { fetchUserProfile } from '../../features/githubusers/githubuserSlice';
import { Alert, Container } from '@mui/material';

const User = () => {
  const { entities, loading, error } = useAppSelector((state) => state.users);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: '10px' }}>
        <LinearSpinner />
      </Container>
    );
  } else if (entities) {
    return (
      <>
        <UserItem user={entities} />
      </>
    );
  } else if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: '10px' }}>
        <Alert severity="error">{error?.message}</Alert>
      </Container>
    );
  } else {
    return null;
  }
};

export default User;
