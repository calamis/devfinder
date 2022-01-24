import React from 'react';
import Search from '../../Components/users/search';
import Card from '../../Components/users/userItem';
import Users from '../../Components/users/Users';

export default function home() {
  return (
    <>
      <Search />
      <Users />
    </>
  );
}
