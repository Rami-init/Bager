import { Typography } from '@mui/material'
import { ProdcutmetaWrapper } from '../../styles/Products'

const ProductMeta = ({product, matches}) => {
  return (
    <ProdcutmetaWrapper>
        <Typography variant={!matches ? 'h6': 'body1'} lineHeight={2}>{ product.name }</Typography>
        <Typography variant={!matches ? 'body1': 'body2'} lineHeight={2}>${ (product.price).toFixed(2) }</Typography>
    </ProdcutmetaWrapper>
  )
}

export default ProductMeta