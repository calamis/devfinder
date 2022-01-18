import * as React from 'react'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';


const About = () => {
  return(
    <Container maxWidth="md">
      <h2>About this APP</h2>
      <p>React app to search Github profiles</p>
      <p>Version: 1.0.0</p>
      <p>Tech Stack: React, Redux Toolkit, MaterialUI, Formik, TypeScript</p>
      <p>Follow me:</p>
      <Stack spacing={2} direction="row">
        <Link href="https://twitter.com/cnalamis" color="inherit">Twitter</Link>
        <Link href="https://github.com/calamis" color="inherit">Github</Link>
      </Stack>
      <p>Created by Christian Alamis</p>
      <p>View this project on my <a href="https://github.com/calamis/devfinder">Github</a></p>
    </Container>
  )
}

export default About