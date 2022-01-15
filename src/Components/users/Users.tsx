import * as React from 'react'
import { useState } from 'react'

import UserItem from '../../Components/users/userItem'
import { IUserDetails } from '../../utils/types'

// redux
import { useAppSelector } from '../../app/hooks'
import LinearSpinner from '../../Components/Layout/Spinner'
import { fetchUserProfile } from '../../features/githubusers/githubuserSlice'

const User = () => {
  const { entities = [], loading, error } = useAppSelector((state) => state.users)
  
  if(loading) {
    return <LinearSpinner />
  } else {
    return (
      <>
        <UserItem user={entities} />
      </>
    )
  }
}

export default User
