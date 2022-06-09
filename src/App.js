import React from 'react'
import { Container, ThemeProvider } from '@mui/material'
import { UiProvider } from './context/ui/index'
import theme from './styles/theme/theme' 
import AppBar from './views/AppBar'
import Banner from './views/Banner'
import Bormotion from './views/Bormotion'
import Products from './views/Products'
import Footer from './views/Footer'
import DrawarApp from './views/DrawarApp'
import Search from './views/Search'

const App = () => {
  document.title = 'Bager Shop - Home'
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <UiProvider>
          <AppBar />
          <Banner />
          <Bormotion />
          <Products />
          <Footer />
          <DrawarApp />
          <Search />
        </UiProvider>
      </Container>
    </ThemeProvider>
    
  )
}

export default App