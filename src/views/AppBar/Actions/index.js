import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ActionsContainerMobile, ActionsContainerDeskTop, MyList } from '../../../styles/AppBar'
import { ListItemButton, ListItemIcon, Divider } from '@mui/material'
import { Colors } from '../../../styles/theme/theme'

const Actions = ({ matches })=>{
    const Components = matches ? ActionsContainerMobile : ActionsContainerDeskTop
    return (
        <Components>

            <MyList type='row' >
                
                <Divider orientation='vertical' flexItem/>
                <ListItemButton>
                    <ListItemIcon
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches && Colors.light_gery,
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem/>
                <ListItemButton>
                    <ListItemIcon
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches && Colors.light_gery,
                        }}
                    >
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem/>
                <ListItemButton>
                    <ListItemIcon
                        sx={{
                            display: 'flex', 
                            justifyContent: 'center',
                            color: matches && Colors.light_gery,
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Components>
    )
}

export default Actions