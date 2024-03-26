import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

function MuiSwitches() {
const [value, setValue] = useState(false)

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
}

console.log({"Dark mode ": value})
  return (
    <Box>
        <Typography variant='h5' color='primary'>Mui Switches</Typography>

        <FormControlLabel label="mode" control={<Switch checked={value} onChange={handleChange} />} />
    </Box>
  )
}

export default MuiSwitches