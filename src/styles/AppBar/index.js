
import { styled } from '@mui/material/styles'
import { Colors } from '../theme/theme'
import { Box, Typography, List } from '@mui/material'

export const AppBarContainer = styled(Box)(()=>({
    display: 'flex',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}))

export const AppBarHeader = styled(Typography)(({ theme })=>({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    fontFamily: 'smooch',
}))

export const MyList = styled(List)(({ type })=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    color: Colors.secondary,
    fontSize: '1.4rem',
    fontWeight: '600',
}))

export const ActionsContainerMobile = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: Colors.dark,
    color: Colors.light,
    padding: '6px 4px',
    borderTop: `1px solid ${Colors.secondary_gery}`,
    zIndex: 99,
    width: '100%'
}))

export const ActionsContainerDeskTop = styled(Box)(()=>({
    flexGrow: 0,
}))