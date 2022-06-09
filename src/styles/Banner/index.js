import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { Colors } from '../theme/theme'
export const BannerContainer = styled(Box)(({ theme })=>({
    width: '100%',
    height: '100%',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7, 
    background: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column'
    }
}))
export const BannerImage = styled('img')(({ src, theme })=>({
    width: '100%',
    src: `url(${src})`,
    [theme.breakpoints.down('md')]:{
        width: '350px',
        height: '100%'
    },
    [theme.breakpoints.down('sm')]:{
        width: '100%',
        height: '300px'
    },

}))
export const BannerContent = styled(Box)(({ theme })=>({
    padding: '3rem 1.5rem',
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    },
    '& .MuiTypography-h3 ': {
        mt: 3,
        mb: 1,
        fontWeight: 600,
        letterSpacing: '1px',
        fontSize: '6rem',
        textTransform: 'uppercase',
        [theme.breakpoints.down('md')]:{
            fontSize: '3rem', 
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.5rem', 
        }
    },
    '& .MuiTypography-h6': {
        fontStyle: 'italic',
        color: Colors.main_gery,
        fontWeight: 600,
        letterSpacing: '1px',
        [theme.breakpoints.down('md')]:{
            fontSize: '1rem', 
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '.75rem', 
        }
    },
    '& .MuiTypography-body1': {
        color: Colors.text_gery,
        [theme.breakpoints.down('md')]:{
            fontSize: '.75rem', 
        }
    }
}))