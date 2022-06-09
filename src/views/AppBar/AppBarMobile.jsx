import { AppBarContainer, AppBarHeader } from '../../styles/AppBar'
import Actions from './Actions'
import  MenuIcon from '@mui/icons-material/Menu'
import  SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { useUiContext } from '../../context/ui/index'
const AppBarMobile = ({matches}) => {
  const { setDrawerOpen, setShowSearch} = useUiContext()
  return (
   <AppBarContainer>
     <IconButton onClick={()=>setDrawerOpen(true)} >
       <MenuIcon />
     </IconButton>
     <AppBarHeader variant='h4'>Bager</AppBarHeader>
     <IconButton onClick={()=>setShowSearch(true)}> 
       <SearchIcon />
     </IconButton>
     <Actions  matches={matches} />
   </AppBarContainer>
  )
}

export default AppBarMobile