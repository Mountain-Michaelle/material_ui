import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

function MuiSelectComp() {

    const [country, setCountry] = useState('')
    const [countries, setCountries] = useState<string[]>([])

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    const handleChange1 = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountry(value as string)
    }

    console.log("Country :", countries)

  return (
    <Stack spacing={2}> 
    <Typography variant="h4">Select and Multiple Select in MUI</Typography>

    <Box width='250px'>
        <TextField label='Select Country' onChange={handleChange1} value={country} select fullWidth>
            <MenuItem value='ng'>Nigeria</MenuItem>
            <MenuItem value="us">USA</MenuItem>
            <MenuItem value='cad'>Canada</MenuItem>
        </TextField>
    </Box>  
    <Typography variant='h5'> Multiple select input</Typography>
    <Box width='250px'>
        <TextField label='Select Country' onChange={handleChange} 
        select fullWidth SelectProps={{multiple: true}}
        value={countries}
        size='small'
        color='warning'
        >

            <MenuItem value='ng'>Nigeria</MenuItem>
            <MenuItem value="us">USA</MenuItem>
            <MenuItem value='cad'>Canada</MenuItem>
        </TextField>
    </Box>  
    </Stack>
   
  )
}

export default MuiSelectComp