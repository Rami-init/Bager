import React from 'react'
import { Slide, IconButton } from '@mui/material'
import { SearchContainer, SearchTextField } from '../../styles/Search'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useUiContext } from '../../context/ui'
const Search = () => {
  const { showSearch, setShowSearch } = useUiContext()
  return (
    <Slide direction='down' in={showSearch} timeout={500}>
       <SearchContainer>
            <SearchTextField type='text'  label='Search' variant='standard' color='secondary' fullWidth/>
            <IconButton>
                <SearchIcon sx={{color: '#fff', paddingTop: '4px', fontSize:{xs: '2rem', md: '3rem'}}}/>
            </IconButton>
            <IconButton sx={{position: 'absolute', right: 0, top: 0}} onClick={()=>setShowSearch(false)}>
                <CloseIcon  sx={{color: '#fff', paddingTop: '4px', fontSize:{xs: '2rem', md: '3rem',}}} />
            </IconButton>
       </SearchContainer>
    </Slide>
  )
}

export default Search