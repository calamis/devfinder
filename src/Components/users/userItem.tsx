import { InfoRounded } from '@mui/icons-material';
import { Button, Avatar, CardMedia, Box, Card, Typography, Chip } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { IUserDetails } from '../../utils/types'

interface UserProps {
  user: {}
}

const userItem = ({ user }: UserProps ) => {
  console.log('details', user);
  return (
    <>
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
          alt="123 Main St, Phoenix, AZ cover"
          src="https://mui.com/static/images/cards/real-estate.png"
          sx={{
            borderRadius: 0.5,
            width: { xs: '100%', sm: 100 },
            mr: { sm: 1.5 },
            mb: { xs: 1.5, sm: 0 },
          }}
        />

      <Box sx={{ alignSelf: 'center', ml: 2 }}>
        <Typography variant="body2" color="text.secondary">
          123 Main St, Phoenix, AZ
        </Typography>
        <Typography component="div" fontWeight="bold">
          {/* {data?.name} */}
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
          <Chip component="a" label="View Profile" variant="outlined" clickable href="/" />
        </Box>
      </Box>
      </Card>
    </>
  )
}

export default userItem