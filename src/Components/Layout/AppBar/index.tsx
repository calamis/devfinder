import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';

export default function HeaderBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}  marginBottom={5} >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Github Finder
          </Typography>
          <Stack spacing={2} direction="row">
            <Link href="/" color="inherit">Home</Link>
            <Link href="/about" color="inherit">About</Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
