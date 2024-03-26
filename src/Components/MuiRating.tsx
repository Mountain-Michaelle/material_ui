import { Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function MuiRating() {
  const [value, setValue] = useState<number | null >(4.5)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  console.log({"Rating ": value})

  return (
    <Stack spacing={2}>
        <Typography variant="h5" color="error"> MUI Rating </Typography>
        <Rating value={value} onChange={handleChange} precision={0.5} size='large'
        icon={<FavoriteIcon fontSize='inherit' color='error' />} emptyIcon={<FavoriteBorderIcon />} readOnly/>
    </Stack>
  )
}

export default MuiRating