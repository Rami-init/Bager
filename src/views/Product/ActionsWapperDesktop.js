import {IconButton} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { AtionsWapperDesk, ShowIcon } from '../../styles/Products'
import { Colors } from '../../styles/theme/theme'
import ProductDetails from '../ProductDetails'
import useDailogModal from '../../hooks/usedailogModal'

const ActionsWrapperDesktop = ({ product, show }) => {
  const [ProductDetailsDailog, showProductDetailsDailog] = useDailogModal(ProductDetails)
  return (
    <AtionsWapperDesk direction='column' spacing={2}>
      <IconButton sx={{background: Colors.white, opacity: .9}}>
        <FavoriteIcon />
      </IconButton>
        <ShowIcon show={show} >
          <ShareIcon />
        </ShowIcon>
        <ShowIcon show={show} onClick={()=>showProductDetailsDailog()} >
          <FitScreenIcon />
        </ShowIcon>
        <ProductDetailsDailog product={product} />
    </AtionsWapperDesk>
  )
}

export default ActionsWrapperDesktop