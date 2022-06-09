import React from 'react'
import { BannerContainer, BannerImage, BannerContent } from '../../styles/Banner'
import ImageBanner from '../../assets/banner.jpeg'
import { Typography } from '@mui/material'
const Banner = () => {
  return (
   <BannerContainer>
       <BannerImage src={ImageBanner} />
       <BannerContent>
         <Typography variant='h6'>Huge Collections</Typography>
         <Typography variant='h3'>New Bags</Typography>
         <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quo ullam et. Cupiditate quo pariatur reiciendis distinctio quibusdam. Aspernatur, id? Doloremque, vel quisquam nostrum ex sit eius in ducimus atque?</Typography>
       </BannerContent>
   </BannerContainer>
  )
}

export default Banner