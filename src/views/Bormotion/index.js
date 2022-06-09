import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { BormotionContainer} from '../../styles/Bormotion'
import { Slide } from '@mui/material'
const message = [
    '20% off when you get first order',
    'seal summer already begin take a look 50% offer',
    'no shipping  price added when your order above 200$ '
]
const Bormotion = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  useEffect(()=>{
      const intervalId = setInterval(()=>{
          setCount((i)=>(i + 1) % message.length)
          setShow(true)
          setTimeout(()=> setShow(false) ,3000)
      },4000)
      return ()=>{
          clearInterval(intervalId)
      }
  },[])
  return (
    <BormotionContainer>
        <Slide in={show} direction={!show? 'right' : 'left'} timeout={{ enter: 700, exit: 200}}>
            <Typography variant='h5' sx={{fontFamily: 'smooch'}}>{message[count]}</Typography>
        </Slide>
    </BormotionContainer>
  )
}

export default Bormotion