import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../theme/theme'

export const SearchContainer = styled(Box)(({ theme })=>({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    color: '#fff',
    opacity: .9,
    zIndex: 99999,
    padding: '0px 2rem'
}))

export const SearchTextField = styled(TextField)(({ theme })=>({
    '.MuiInputLabel-root': {
       color: Colors.light 
    },
    '.MuiInput-root': {
        fontSize: '2rem',
        color: Colors.light,
        [theme.breakpoints.down('md')]:{
            fontSize: '1rem'
        },
    },
    '.MuiInput-root::before': {
        borderBottom: `1px solid ${Colors.light}`
    }
}))

