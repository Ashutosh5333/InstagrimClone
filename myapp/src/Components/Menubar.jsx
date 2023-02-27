import React from 'react'
import {      Box, IconButton, useColorMode, } from '@chakra-ui/react'
    import { Menu, MenuButton,MenuList, MenuItem, } from '@chakra-ui/react'

import {  HamburgerIcon, InfoIcon, MoonIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'
import { FaRegBookmark } from 'react-icons/fa'
import { MdOutlineSettings } from 'react-icons/md'
import { Navigate } from 'react-router-dom'


const Menubar = () => {
  const {colorMode, toggleColorMode}= useColorMode()

  const handleLogOut =()=>{
    localStorage.clear()
     Navigate("/login")
}

     {/* <AiOutlineMenu/>  */}


  return (
    <>
       <Box  >   
       <Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline' 
  />

  <MenuList   width={{ base: "40%", md: "40%", lg: "20%" }} >

    <MenuItem icon={<MdOutlineSettings />}   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
       Setting
    </MenuItem>
    <MenuItem icon={<TimeIcon />}   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
       Your activity
    </MenuItem>
    <MenuItem icon={<FaRegBookmark />}   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
       Saved
    </MenuItem>
    {/* ? <MoonIcon/> :  <SunIcon/>  }  */}
    <MenuItem  onClick={toggleColorMode}    fontSize={{base:"10px", md:"15px", lg:"20px"}}>
    {colorMode === "light" ? <MoonIcon color="Dark" />  :  <SunIcon color="Light" />  }
    </MenuItem>
    <MenuItem icon={<InfoIcon />}   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
      Report a problem
    </MenuItem>
    <MenuItem   fontSize={{base:"10px", md:"15px", lg:"20px"}}>
         Switch Accounts
    </MenuItem>
    <MenuItem onClick={handleLogOut}  fontSize={{base:"10px", md:"15px", lg:"20px"}}>
       Logout 
    </MenuItem>

  </MenuList>
</Menu>
       
         
       
        </Box>
    </>
  )
}

export default Menubar