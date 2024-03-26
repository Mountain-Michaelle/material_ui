import {ButtonGroup, IconButton, Stack, Typography } from '@mui/material'
import {Button} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react'
import DoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function ButtonElements() {
  return (
    <Stack spacing={4}>
        <Typography variant="h3">Button Elements</Typography>

        <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>  
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="info">Info</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
        </Stack>

        <Stack spacing={4}>
            <Typography variant="h3" component="h1" color="info">Outlined Buttons</Typography>
            <Stack spacing={2} direction="row">
            <Button variant="outlined" color="warning">Warining</Button>
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="error">Error</Button>
            </Stack>
        </Stack>
       
        <Stack spacing={4}>
            <Typography variant="h5">Adding sizes to buttons</Typography>
            <Stack spacing={3} display='block' direction="row">
                <Button variant="outlined" color="warning" size="small">Small</Button>
                <Button variant="contained" color="warning" size="medium">Medium</Button>
                <Button variant="outlined" color="warning" size="large">Large</Button>
            </Stack> 
        </Stack>

        <Stack spacing={3}>
            <Typography variant="h5" color="primary">Mui Button Icons</Typography>
            <Stack spacing={2} direction="row">
            <Button variant="outlined" color="warning" size="small" startIcon={<DoubleArrowRightIcon />}>Small</Button>
                <Button variant="contained" color="warning" size="medium" endIcon={<CheckCircleOutlineIcon />}>Medium</Button>
                <Button variant="outlined" color="warning" size="large" endIcon={<DoubleArrowRightIcon />}>Large</Button> 
                <IconButton size="large" aria-label='send'><DoubleArrowRightIcon /></IconButton>
            </Stack>
        </Stack>

        <Stack spacing={2}>
            <Typography variant="h4" color="primary">Button Groups in Mui</Typography>
            <Stack direction="row">
                <ButtonGroup variant='contained' orientation="vertical" size="small" color="secondary"
                aria-label="alignment button group"
                >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button> 
                </ButtonGroup>
            
            </Stack>
        </Stack>
    </Stack>

  )
}

export default ButtonElements;