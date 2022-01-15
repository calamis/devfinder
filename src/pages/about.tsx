import * as React from 'react'
import Container from '@mui/material/Container'


const About = () => {
  return(
    <Container maxWidth="md">
      <h2>About this APP</h2>
      <p>React app to search Github profiles.</p>
      <p>Version: 1.0.0</p>
      <p>Created by <a href="https://github.com/calamis">Dam Alamis</a></p>
      <p>View this project on my <a href="https://github.com/calamis/devfinder">Github</a></p>
    </Container>
  )
}

export default About