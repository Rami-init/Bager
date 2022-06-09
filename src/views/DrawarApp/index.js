import React from 'react'
import { styled } from '@mui/material/styles'
import { Drawer, List, ListItemButton, ListItemText, Divider, Button } from '@mui/material'
import { useUiContext } from '../../context/ui/index'
import CloseIcon from '@mui/icons-material/Close'
import { Colors } from '../../styles/theme/theme'
const MiddleDivider = styled((props)=>(
  <Divider variant='middle' {...props} />
))``
const CloseButtonDrawer = styled(Button)(()=>({
  position: 'fixed',
  top: '5px',
  left: '240px',
  zIndex: 9999,
  color: Colors.light,
  fontSize:'4rem'
}))
const DrawarApp = () => {
  const { drawerOpen, setDrawerOpen} = useUiContext()
  return (
    <Drawer open={drawerOpen}>
      {drawerOpen && <CloseButtonDrawer onClick={()=>setDrawerOpen(false)}><CloseIcon /></CloseButtonDrawer>}
      <List>
        <ListItemButton onClick={()=>setDrawerOpen(false)}>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton onClick={()=>setDrawerOpen(false)}>
          <ListItemText>Categories</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton onClick={()=>setDrawerOpen(false)}>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton onClick={()=>setDrawerOpen(false)}>
          <ListItemText>Aboute</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton onClick={()=>setDrawerOpen(false)}>
          <ListItemText>Contact Us</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  )
}

export default DrawarApp