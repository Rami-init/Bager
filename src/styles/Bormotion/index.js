import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { Colors } from '../theme/theme'
export const BormotionContainer = styled(Box)(({ theme })=>({
    width: '100%',
    height: '100%',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    padding: '1.2rem',
    color: Colors.text_gery,
    textTransform: 'capitalize',
    overflow: 'hidden',
    '& .MuiTypography-h5': {
        [theme.breakpoints.down('sm')]: {
            fontSize: '.75rem'
        }
    }
}))