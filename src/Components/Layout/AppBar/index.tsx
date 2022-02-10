import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

export default function HeaderBar() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }} marginBottom={5}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Github Finder
            </Typography>
            <Stack spacing={2} direction="row">
              <Link to="/" className={classes.link}>
                <Typography color="white">Home</Typography>
              </Link>
              <Link to="/about" className={classes.link}>
                <Typography color="white">About</Typography>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
