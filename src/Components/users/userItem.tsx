import { InfoRounded } from '@mui/icons-material';
import {  Container, Button, Avatar, CardMedia, Box, Card, Typography, Chip } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { IUserDetails } from '../../utils/types'

interface UserProps {
  user: {
    name: string
    login: string
    location: string
    avatar_url: string
  }
}

const userItem = ({ user }: UserProps ) => {
  return (
    <Container maxWidth="md" sx={{ mt: '10px'}}>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          p: 1,
          flexDirection: {
            xs: 'column', // mobile
            sm: 'row', // tablet and up
          },
        }}
      >
        <CardMedia
          component="img"
          width="100"
          height="100"
          alt={user?.location ?? null }
          src={user?.avatar_url}
          sx={{
            borderRadius: 0.5,
            width: { xs: '100%', sm: 100 },
            mr: { sm: 1.5 },
            mb: { xs: 1.5, sm: 0 },
          }}
        />

      <Box sx={{ alignSelf: 'center', ml: 2 }}>
        <Typography variant="body2" color="text.secondary">
        {user?.location ?? null }
        </Typography>
        <Typography component="div" fontWeight="bold">
          {user?.name}
        </Typography>
        <Box
          sx={{
            ml: -1,
            mt: 0.75,
            px: 1,
            py: 0.5,
            borderRadius: 1,
            display: 'flex',
            typography: 'caption',
            bgcolor: (theme) => 
              theme.palette.mode === 'dark' ? 'primary.900' : 'primary.50',
            color: (theme) => 
              theme.palette.mode === 'dark' ? '#fff' : 'primary.700',
          }}
        >  
          <Chip component="a" color="primary" label="View Profile" variant="filled" clickable href={`/user/${user?.login}`} />
        </Box>
      </Box>
      </Card>
    </Container>
  )
}

export default userItem