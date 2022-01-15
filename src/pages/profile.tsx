import * as React from 'react'
import { useParams  } from "react-router-dom";

import UserInfo from '../Components/users/userItem'

// redux
import { useAppSelector, useAppDispatch } from '../app/hooks'
import LinearSpinner from '../Components/Layout/Spinner'
import { fetchUserProfile } from '../features/githubusers/githubuserSlice'

export default function profile() {
  const dispatch = useAppDispatch();
  let { name } = useParams();
  const { entities = [], loading, error} = useAppSelector((state) => state.users)

  console.log('entities', entities)

  React.useEffect(() => {
    dispatch(fetchUserProfile(name))
    // eslint-disable-next-line
  }, [])

  return (
    <>
     Name: {entities?.name}
    </>
  )
}
