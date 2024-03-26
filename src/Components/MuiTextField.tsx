import { Input, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiTextField() {

    const [value, setValue] = useState([])


    const handleChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <Stack spacing={4}>
        <Typography variant="h4">Text Fields in Material UIs</Typography>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant="filled" />
            <TextField label='Name' variant="outlined" />
            <TextField label='Name'  variant="standard" />
        </Stack>

        <Stack spacing={2} direction="row" >
            <TextField label='Small secondary' variant="filled" size="small" color='secondary' />
        </Stack>
        <Typography variant='h4'>Form Input in MUI</Typography>
        <Stack spacing={2} direction="row" >
            <TextField label='Text input' variant="filled" size="small" color='secondary' required />
            <TextField type='password' label='Password' variant="filled" size="small" color='secondary' helperText='Please do not share your password' required />
            <TextField label='Text input' variant="filled" size="small" color='secondary' inputProps={{readOnly: true}} />
        </Stack>
        <Typography variant="h5">Input Adornment in Material ui</Typography>
        <Stack spacing={2} direction="row" >
            <TextField label='Amount' variant="filled" size="small" color='secondary' 
            InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
            value={value}
            onChange={(e) => handleChange(e)}
            error={!value}

            helperText={ !value ? "Please input amount " : "Amoun in Dollar"}
            />

            <TextField label='Weight' variant="filled" size="small" color='secondary'
            InputProps={{
                endAdornment : <InputAdornment position='end'>kg</InputAdornment>
            }}
            />

        </Stack>
    </Stack>
  )
}

export default MuiTextField