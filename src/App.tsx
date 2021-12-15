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
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.users)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    if(query) {
      dispatch(fetchUsers(query))
    }
  }, [dispatch, query])
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
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

          {data? <CardDetails userdetails={data}  /> : null }
        </Container>
    </>
  )
}

export default App
