import { createTheme } from '@mui/material'
export const Colors = {
    primary: '#d18b8b',
    primary_light: '#be6f72',
    secondary: '#576066',
    success: '#4caf50',
    info: '#00BCD4',
    error: '#eb0b0b',
    warning: '#FF9800',
    dark: '#010b16',
    light: '#fafafa',
    // gery 
    main_gery: '#212121',
    secondary_gery: '#212121',
    text_gery: '#484848',
    caption_gery: '#757575',
    light_gery: '#bdbdbd',
    // main color
    white: '#fff',
    black: '#000',
    pink: '#e7494fbf'
}

const theme = createTheme({
    palette: {
        primary:{
            main: Colors.primary,
            light: Colors.primary_light,
        },
        secondary:{
            main: Colors.secondary
        },

    },
    components: {
        MuiButton: {
          defaultProps:{
              disableRipple: true,
              disableElevation: true
          }  
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: '270px',
                    background: Colors.primary,
                    borderRadius: `0px 100px 0px 0px`,
                    borderRight: `1px solid ${Colors.light}`,
                    color: Colors.white,
                    fontWeight: 600
                }
            }
        }
    }
})

export default theme;