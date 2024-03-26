import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React, { useState } from 'react'

function MuiRadioButton() {

    const [value, setValue] = useState('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

        console.log("Radio option ", value)
  return (
    <div>
        <Stack spacing={2}>
            <Box>
                <FormControl error>
                    <FormLabel id='job-experience-group-label'>Years of Experience</FormLabel>
                    <RadioGroup name="job-experience-group" aria-labelledby = 'job-experience-group-label'
                    onChange={(e) => handleChange(e)} row>
                        <FormControlLabel  control={<Radio size='medium' color='success' />} label='0-2' value='0-2' />
                        <FormControlLabel  control={<Radio />} label='2-5' value='2-5' />
                        <FormControlLabel  control={<Radio />} label='5-10' value='5-10' />
                        <FormControlLabel  control={<Radio />} label='10-15' value='10-15' />
                    </RadioGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Stack>
    </div>
  )
}

export default MuiRadioButton