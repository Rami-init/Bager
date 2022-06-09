import { ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/AppBar'
import Actions from './Actions'
import SearchIcon from '@mui/icons-material/Search'
import { useUiContext } from '../../context/ui'
const AppBarDesktop = ({ matches }) => {
  const { setShowSearch } = useUiContext()
  return (
    <AppBarContainer>
     <AppBarHeader variant='h4'>Bager</AppBarHeader>
     <MyList type='row'>
       <ListItemText primary='Home' />
       <ListItemText primary='Products' />
       <ListItemText primary='Aboute' />
       <ListItemText primary='Contact Us' />
       <ListItemButton onClick={()=>setShowSearch(true)}>
            <ListItemIcon>
                <SearchIcon />
            </ListItemIcon>
        </ListItemButton>     
     </MyList>
     <Actions  matches={matches}  />
   </AppBarContainer>
  )
}

export default AppBarDesktop