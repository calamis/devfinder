import * as React from 'react';
import InputField from './Components/TextField';
import SearchIcon from '@mui/icons-material/Search'
import HeaderBar from './Components/AppBar';
import Container from '@mui/material/Container';
import CardDetails from './Components/Card';

// redux
import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchUsers } from './features/githubusers/githubuserSlice'


function App() {
  const { entities, loading, error} = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch();
  const [query, setQuery] = React.useState('')
  const [user, setUser] = React.useState({})

  const fetchUser = async(query: string) => {
      try {
        const user = dispatch(fetchUsers(query)).unwrap()
        console.log('user', user)
      } catch (error) {
        alert(`error, ${error.message}`)
      }
    }

  React.useEffect(() => {
    fetchUser(query)
  }, [dispatch, query])
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  };

  return (
    <>
      <HeaderBar />
        <Container maxWidth="md">
          <InputField 
            label="Search Github User"
            value={query}
            iconPosition="end"
            icon={<SearchIcon />}
            variant="outlined"
            onChange={handleChange} 
          />

          {entities ? <CardDetails userdetails={user}  /> : <div>No Data</div> }
        </Container>
    </>
  )
}

export default App
