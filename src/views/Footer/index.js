import { Typography, useMediaQuery, Stack, Grid, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { FooterApp, HeadingFooter, ParaFooter, TextFieldFooter } from '../../styles/Footer'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import SendIcon from '@mui/icons-material/Send'

const Footer = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <FooterApp>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={4}>
          <HeadingFooter variant={!matches ? 'h5': 'h6'}>
            Aboute Us
          </HeadingFooter>
          <Stack spacing={1}>
            <Typography sx={{ lineHeight: 1.7, textTansfrom: 'capitalize', paddingRight: '1rem'}} variant={!matches ? 'caption' : 'body2'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quo ullam et. 
              Cupiditate quo pariatur reiciendis distinctio quibusdam. Aspernatur,
              id? Doloremque, vel quisquam nostrum ex sit eius in ducimus atque?
             </Typography>
             <Stack mt={2} direction='row' spacing={2}>
             <FacebookIcon /><TwitterIcon /> <InstagramIcon />
             </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6} lg={2}>
          <HeadingFooter variant={!matches ? 'h5': 'h6'}>
            information
          </HeadingFooter>
          <Stack spacing={2}>
            <ParaFooter>aboute us</ParaFooter>
            <ParaFooter>order Tracking</ParaFooter>
            <ParaFooter>privacy & policy</ParaFooter>
            <ParaFooter>terms & condetions</ParaFooter>
          </Stack>
        </Grid>
        <Grid item xs={6} lg={2}>
          <HeadingFooter variant={!matches ? 'h5': 'h6'}>
            my Account
          </HeadingFooter>
          <Stack spacing={2}>
            <ParaFooter>login</ParaFooter>
            <ParaFooter>my cart</ParaFooter>
            <ParaFooter>my account</ParaFooter>
            <ParaFooter>wishlist</ParaFooter>
          </Stack>
        </Grid>
        <Grid item xs={6} lg={4}>
          <HeadingFooter variant={!matches ? 'h5': 'h6'}>
            NewsLetter
          </HeadingFooter>
          <Stack spacing={5}>
            <TextFieldFooter type='email' label='Email' variant='standard' />
            <Button startIcon={<SendIcon  sx={{color: '#fff'}} />} variant='contained' sx={{color: '#fff'}}>Subscribe</Button>
          </Stack>
        </Grid>
      </Grid>
    </FooterApp>
  )
}

export default Footer
