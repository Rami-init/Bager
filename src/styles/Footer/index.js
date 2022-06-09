import { styled } from "@mui/material/styles";
import { Colors } from "../theme/theme";
import { Box, Typography, TextField } from "@mui/material";

export const FooterApp = styled(Box)(({ theme })=>({
    padding: '2rem 2rem 4rem 2rem',
    background: Colors.secondary,
    color: Colors.light_gery,
    [theme.breakpoints.down('md')]:{
        paddingBottom: '8rem'
    }
}))
export const HeadingFooter = styled(Typography)(()=>({
    padding: '1rem 0',
    color: Colors.light,
    textTransform: 'uppercase'
}))
export const ParaFooter = styled(Typography)(({theme})=>({
    color: Colors.light,
    textTransform: 'capitalize',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '.873rem',
    }
}))
export const TextFieldFooter = styled(TextField)(({theme})=>({
    '.MuiInputLabel-root' : {
       color: Colors.light_gery 
    },
    '.MuiInput-root::before': {
       borderBottom: `1px solid ${Colors.light_gery}`,
    }
}))