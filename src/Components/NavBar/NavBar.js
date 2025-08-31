import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='!bg-black'>
          <div className='flex align-middle'>
            <span className='text-left ml-4 lg:ml-7 text-lg lg:text-3xl'>Kaveesha Sandeepani</span>
            <div className='ml-[50rem] align-middle'>
              <button className='mr-6'>Home</button>
              <button className='mr-6'>About Me</button>
              <button className='mr-6'>Projects</button>
              <button className='mr-6'>Contact Me</button>
            </div>
          </div>
      </AppBar>
    </Box>
    
  )
}

export default navbar