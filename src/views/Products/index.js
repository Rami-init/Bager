import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery, Typography } from '@mui/material'
import { products } from '../../data/products'
import SingleProduct from '../Product/index'
import { Container, Grid } from '@mui/material'

const Products = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Container>
        <Typography mt={3} textAlign='center' variant={matches? 'h5' : 'h4'}>Our Products</Typography>
        <Grid container justifyContent='center' spacing={2} sx={{margin: '20px 4px 10px 4px'}}>
            {products.map((product)=>(
                <Grid item key={product.id} display='flex' flexDirection='column' alignItems='center' xs={12} sm={6} lg={3}>
                    <SingleProduct product={product} matches={matches} />
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default Products