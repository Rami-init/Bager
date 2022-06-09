import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Box, Slide, IconButton, Typography, Stack, Button} from '@mui/material'
import { Colors } from '../../styles/theme/theme'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, styled } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
const slideTransation = (props)=>{
    return <Slide direction='down' {...props} /> 
}
const ProductDetailsWapper = styled(Box)(({ theme })=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    gap: '2rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    }
}))
const ProductImageWapper = styled('img')(()=>({
    maxWidth: '470px',
    height: '100%',
    backgroundSize: 'cover',
}))
const ProductDetails = ({ open, product,  onClose}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('up'))
  const [qty, setQty] = useState(1)
  return (
    <Dialog
        TransitionComponent={slideTransation}
        variant='permanat'
        open={open}
        fullScreen
    >
        <DialogTitle
            sx={{background: Colors.primary}}
        >
            <Box display='flex' justifyContent='space-between' alignItems='center' >
                {product.name.toUpperCase()}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <ProductDetailsWapper >
                <ProductImageWapper src={product.image} />
                <Stack spacing={2}>
                    <Typography variant='caption'>SGR 232</Typography>
                    <Typography variant='body1' sx={{textTransform:' capitalize', fontWeight: 600}}>Avalabilty: 5 In Stock </Typography>
                    <Typography variant='h4' sx={{textTransform:' capitalize', fontWeight: 600}}>{product.name}</Typography>
                    <Typography variant='body2' sx={{paddingRight: '3rem'}}>{product.description}</Typography>
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '22rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '8rem',
                            }}
                        >
                            <IconButton size='small' onClick={()=>setQty(qty - 1)} sx={{ borderRadius: '3px', background: Colors.secondary, color: Colors.white, ':hover': {background: Colors.primary}}}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant='h6' sx={{textTransform:' capitalize', fontWeight: 600}}> {qty} </Typography>
                            <IconButton size='small' onClick={()=>setQty(qty + 1)} sx={{ borderRadius: '3px', background: Colors.secondary, color: Colors.white, ':hover': {background: Colors.primary}}}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Button variant='contained' onClick={()=>console.log('add to cart')}>Add to Cart</Button>
                    </Box>
                    <Box display='flex' alignItems='center' paddingTop={3}>
                        <IconButton size='small' onClick={()=>console.log('like')} sx={{ ':hover': {color: Colors.primary}}}>
                            <FavoriteIcon />
                        </IconButton>
                        &nbsp; Add To Wish List
                    </Box>
                    <Stack direction='row' spacing={3}>
                        <FacebookIcon sx={{color: Colors.secondary, ':hover': {color: Colors.primary}}}/>  
                        <TwitterIcon sx={{color: Colors.secondary, ':hover': {color: Colors.primary}}}/> 
                         <InstagramIcon sx={{color: Colors.secondary, ':hover': {color: Colors.primary}}}/>
                    </Stack>
                </Stack>
            </ProductDetailsWapper>
        </DialogContent>
    </Dialog>
  )
}

export default ProductDetails