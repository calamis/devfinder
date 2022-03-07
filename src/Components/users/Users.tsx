import * as React from 'react';
import { useState, useEffect } from 'react';

import UserItem from '../../Components/users/userItem';
import { IUserDetails } from '../../utils/types';

// redux
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import LinearSpinner from '../../Components/Layout/Spinner';
import { Alert, Container, Pagination } from '@mui/material';

const PER_PAGE_LIMIT = 9;

const User = () => {
  const dispatch = useAppDispatch();
  const { entities, loading, error } = useAppSelector((state) => state.users);
  const [pageIndex, setPageIndex] = React.useState(1);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setPageIndex(page - 1);
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: '10px' }}>
        <LinearSpinner />
      </Container>
    );
  } else if (entities) {
    return (
      <>
        {entities?.items?.map((users: any) => {
          return <UserItem user={users} key={users.name} />;
        })}

        {Math.ceil(entities?.total_count / PER_PAGE_LIMIT) > 2 && (
          <Pagination
            sx={{ my: 8 }}
            count={Math.ceil(entities?.total_count / PER_PAGE_LIMIT)}
            page={pageIndex + 1}
            color="primary"
            onChange={handleChangePage}
          />
        )}
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
