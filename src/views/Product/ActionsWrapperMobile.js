import {Stack, IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import ProductDetails from '../ProductDetails'
import useDailogModal from '../../hooks/usedailogModal'

const ActionsWrapperMobile = ({ product }) => {
  const [ProductDetailsDailog, showProductDetailsDailog] = useDailogModal(ProductDetails)
  return (
    <Stack direction='row'>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton onClick={()=>showProductDetailsDailog()} >
        <FitScreenIcon/>
      </IconButton>
      <ProductDetailsDailog product={product} />
    </Stack>
  )
}

export default ActionsWrapperMobile