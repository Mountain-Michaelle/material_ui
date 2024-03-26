import { Box, Typography } from '@mui/material'
import React from 'react'

function MuiBoxLayout() {
  return (
    <>
    <Box sx={{display:'flex', width:'170px', height:'170px' ,backgroundColor:'error.dark', padding: '16px', '&:hover': { backgroundColor :'error.light', cursor:'pointer'} }}>

        <Typography  variant="h4" color='secondary.light' component='body2'>Mui Box component</Typography>

    </Box>

    <Box 
    display='flex' width='200px' height='200px' bgcolor='primary.light' p={2}>
        <Typography variant='h4' color='primary.dark'>Mui Box</Typography>
    </Box>

    </>
  )
}

export default MuiBoxLayout
