import React from 'react'
import {Typography} from '@mui/material';

import '../Assets/css/MuiTypo.css';

function MuiTypography() {
  return (
    <div className="mui">
        <Typography variant="h1">h1 variant</Typography>
        <Typography variant="h2">h2 variant</Typography>
        <Typography variant="h3">h3 variant</Typography>
        <Typography variant="h4">h4 variant</Typography>
        <Typography variant="h5">h5 variant</Typography>
        <Typography variant="h6" component="h1" gutterBottom>h6 variant</Typography>
        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>
        <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sunt alias mollitia
         magnam atque quibusdam excepturi amet ipsum veniam suscipit 
         facilis incidunt inventore ex consequatur esse minus, perspiciatis debitis velit?</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>

        <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sunt alias mollitia
         magnam atque quibusdam excepturi amet ipsum veniam suscipit 
         facilis incidunt inventore ex consequatur esse minus, perspiciatis debitis velit?</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>
        
    </div>
  )
}

export default MuiTypography