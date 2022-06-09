import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AppBarDesktop from './AppBarDesktop'
import AppBarMobile from './AppBarMobile'
const AppBar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
        { matches ? <AppBarMobile matches={matches} />: <AppBarDesktop  matches={matches} />}
    </div>
  )
}

export default AppBar