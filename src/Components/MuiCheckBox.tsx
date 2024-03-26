import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function MuiCheckBox() {

    const [acceptTnC, setAcceptTnC] = useState(false)

    const [skills, setSkills] = useState<string[]>([])

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(e.target.checked)
    }

    const handleSkillChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const index = skills.indexOf(e.target.value)

        if(index === -1){
          setSkills([...skills, e.target.value])  
        }else{
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }
        
    }
    console.log({"Skills :": skills})
  return (
    <Stack spacing={4}>
        <Typography variant='h5' color='primary'>Mui Check Box</Typography>
        <Box>
            <FormControlLabel label='I accept terms and condition'
                control={<Checkbox checked={acceptTnC} onChange={handleChange} aria-label='I accept terms and condition'/>}
            />
            <BookmarkIcon />
        </Box>
        <Typography variant='h6'>Checkbox with Icons</Typography>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptTnC} onChange={handleChange}  />
        </Box>

        <Typography variant='h6'>Working with checkbox group</Typography>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    label='HTML'
                    value='html'
                    control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}  />
                
                    <FormControlLabel
                    label='CSS'
                    value='css'
                    control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}  />

                     <FormControlLabel
                    label='JavaScript'
                    value='javascript'
                    control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}  />

                    <FormControlLabel
                    label='Python'
                    value='python'
                    control={<Checkbox checked={skills.includes('python')} onChange={handleSkillChange} />}  />

                
                </FormGroup>
            </FormControl>
        </Box>
    </Stack>
  )
}

export default MuiCheckBox