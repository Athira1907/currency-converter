import React from 'react'
import { Grid,InputAdornment,TextField} from '@mui/material';
function InputAmount() {
  return (
    <>
    
    <Grid item xs={12} md>
{/* inputProps is a property of the Material UI Input component 
that applies to the input DOM-element and it gets all of its attributes.
 It can be used to add or change attributes that are not controlled by the Input component properties.
 For example, inputProps can be used to add accessibility attributes like aria-label or title to the input element. */}


<TextField label="Amount" fullWidth InputProps={{type:"number",startAdornment:<InputAdornment position='start'>$</InputAdornment>}}></TextField>

    </Grid>
    
    </>
  )
}

export default InputAmount