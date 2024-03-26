import { Stack, Autocomplete, Typography, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiAutoComplete() {

    type Skil = {
        id : number,
        label: string
    }



    const skills = ['Python', 'HTML', 'CSS', 'REACT', 'NEXT'];

    const skillOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill
    }))

    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skil | null>(null)


    console.log({skill})
  return (
    <Stack>
        <Typography variant='h5' color='primary' >Material Ui AutoCompletion </Typography>
        <Stack spacing={2} width='250px'>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' />} 
            value={value}
            onChange={(event: any, newValue : string | null ) => setValue(newValue)}
            freeSolo
            />

            <Autocomplete options={skillOptions} renderInput={(params) => <TextField {...params} label='Skill' />}
            value={skill}
            onChange={(event: any, newValue : Skil | null ) => setSkill(newValue)}
          />
        </Stack> 
    </Stack>
  
  )
}

export default MuiAutoComplete