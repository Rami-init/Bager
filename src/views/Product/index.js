import { useState } from 'react'
import { Product, ImageProduct, ActionAddToCard } from '../../styles/Products'
import ProductMeta from './ProductMeta'
import ActionsWapperMobile from './ActionsWrapperMobile'
import ActionsWapperDesktop from './ActionsWapperDesktop'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const SingleProduct = ({product, matches})=>{
    const [show, setShow] = useState(false)
    return(
        <Product onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <ImageProduct src={product.image} />
            <ProductMeta product={product} matches={matches} />
            {matches ? <ActionsWapperMobile product={product} /> : <ActionsWapperDesktop product={product} show={show} />}
            <ActionAddToCard show={show} variant='contained'>Add to Cart &nbsp; <ShoppingCartIcon fontSize='inherit' /> </ActionAddToCard>
        </Product>
    )
}

export default SingleProduct