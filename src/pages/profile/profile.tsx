import * as React from 'react'
import { useParams  } from "react-router-dom";
import { Box, Container, Grid, Stack, Typography, Card } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { IProfile } from '../../utils/types' 

// redux
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUserProfile, fetchUserRepos } from '../../features/githubusers/githubuserSlice'

export default function profile() {
  const dispatch = useAppDispatch();
  let { name } = useParams();
  const { entities = [], repos } = useAppSelector((state) => state.users)

  React.useEffect(() => {
    dispatch(fetchUserProfile(name))
    dispatch(fetchUserRepos(name))
    // eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth="md" sx={{ marginBottom: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
              alt="green iguana"
            />
            <Box sx={{ padding: "20px"}}>
            <CardContent>
              <Grid container>
                <Grid item xs={12} sm={3}>
                  <Avatar 
                    alt="Remy Sharp"
                    src={entities?.avatar_url}
                    sx={{ width: 150, height: 150, margin: '-80px auto' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="h2" variant="h6" fontWeight="bold">
                    {entities?.name}
                  </Typography>
                  <Typography component="p" variant="caption" fontWeight="body2">
                    {entities?.bio}
                  </Typography>
                  <Typography component="p" variant="caption" fontWeight="body2">
                    {entities?.location}
                  </Typography>
                  <Stack spacing={2} direction="row">
                    <Button sx={{color: "#455A64", textTransform: 'lowercase'}} size="small" startIcon={<GroupAddIcon />}> {entities?.followers} Followers </Button>
                    <Button sx={{color: "#455A64", textTransform: 'lowercase'}} size="small"> {entities?.following} Following </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions >
              <Grid container sx={{ alignItems: 'center'}}>
                <Grid item xs={12} sm={8}>
                  <Stack spacing={2} direction="row">
                    <Link href={entities?.html_url} variant="button" color="inherit" underline="none" sx={{ color: "#455A64", borderRadius: "3px", border: 'solid 1px #455A64', padding: '2px 12px' }}>Follow</Link>
                    <Link href={`mailto:${entities?.email}`} variant="button" color="inherit" underline="none" sx={{ backgroundColor: '#1565c0', color: "#fff",  borderRadius: "3px", border: 'solid 1px #1565c0', padding: '2px 12px' }}>Contact</Link>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'space-between' }} 
                  >
                    <Link href={`https://twitter.com/${entities?.twitter_username}`} color="inherit" sx={{display: 'flex', alignItems: 'center', width: '30px'}}><TwitterIcon color="primary">add_circle</TwitterIcon></Link>
                    <Link href={`mailto:${entities?.email}`} color="inherit" sx={{display: 'flex', alignItems: 'center', width: '30px'}}><EmailIcon color="primary">add_circle</EmailIcon></Link>
                    <Link href={`https://${entities?.blog}`} color="inherit" sx={{display: 'flex', alignItems: 'center', width: '30px'}}><LinkIcon color="primary">add_circle</LinkIcon></Link>
                  </Box>
                  
                </Grid>
              </Grid>
            </CardActions>
            </Box>
          </Card>
          <Box mt={2}>
            <Grid container sx={{ alignItems: 'center'}}>
                <Grid item xs={12} sm={6}>
                  <Typography component="h2" variant="subtitle1" fontWeight="bold" sx={{color: '#455A64'}}>
                    About
                  </Typography>
                  <Typography component="p" variant="body2" fontWeight="normal" sx={{color: '#455A64', marginTop: "20px"}}>
                    {entities?.bio}
                  </Typography>
                </Grid>
            </Grid>
          </Box>
          <Box mt={10}>
            <Typography component="h2" variant="subtitle1" fontWeight="bold" sx={{color: '#455A64'}}>
              Top Github Repository
            </Typography>
              {repos?.map((repo: IProfile, index: any) => {
                return (
                  <Card sx={{ minWidth: 100, marginTop: 2 }} key={index}>
                    <CardContent>
                      <Typography component="h2" variant="subtitle1" fontWeight="bold" sx={{ color: '#455A64' }}>
                       <Link href={repo.html_url} underline="none">{repo.name}</Link>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {repo.description ?? 'N/A'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">{repo.language}</Button>
                    </CardActions>
                  </Card>
                  )
              })}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
