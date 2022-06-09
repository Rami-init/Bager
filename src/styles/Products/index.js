import { styled } from "@mui/material/styles";
import { Box, Button, IconButton, Stack } from '@mui/material'
import { Colors } from "../theme/theme";
import { translate, scaleButton } from '../animation/animation'

export const Product = styled(Box)(({ theme })=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '320px',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
})) 
export const ImageProduct = styled('img')(({ src, theme })=>({
    borderRadius: '4px',
    src: `url(${src})`,
    width: '100%',
    height: '290px',
    background: Colors.light_gery,
}))

export const ActionProdcut = styled(IconButton)(()=>({
    background: Colors.white,
    margin: 4,
}))
export const AtionsWapperDesk = styled(Stack)(()=>({
    position: 'absolute',
    top: '5%',
    right:' 2%',
}))
export const ActionAddToCard = styled(Button, {
    shouldForwardProp: (prop)=> prop !== 'show'
})(({ show, theme })=>({
    fontSize: '12px',
    background: Colors.secondary,
    color: Colors.white,
    opacity: 0.9,
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        bottom: '20%',
        width: '100%',
        padding: '10px 5px',
        animation: `${scaleButton} .5s ease 0s 1 normal none`

    }
}))
export const ProdcutmetaWrapper = styled(Box)(()=>({
   padding: 4,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
export const ShowIcon = styled(IconButton, {
    shouldForwardProp: (prop)=> prop !== 'show'
})(({ show, theme})=>({
    background: Colors.white,
    opacity: .9,
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none',
        animation: `${translate} .5s ease 0s 1 normal none`
    }
 }))

