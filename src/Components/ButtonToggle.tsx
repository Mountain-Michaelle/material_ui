import { Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function ButtonToggle() {

    const [formats, setFormats] = useState<string | null>(null)

    const handleFormatsChange = (event : React.MouseEvent<HTMLElement>,  updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }

    
    console.log({"Formats " : formats})

  return (
    <div>
        <Stack spacing={4} >
            <Typography variant="h4" color="primary">
                Button Toggle Components
            </Typography>

            <Stack direction="row">
                <ToggleButtonGroup value={formats} onChange={handleFormatsChange} aria-label='text formatting'
                size='small' color='success' orientation='vertical' exclusive>
                    
                    <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value="underlined" aria-label="underline"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    </div>
  )
}

export default ButtonToggle