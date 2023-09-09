import React from 'react'
import { Button, Grid} from '@mui/material';
import RepeatIcon from '@mui/icons-material/Repeat';
function Switchcurrency() {
  return (
    <>
    
    
    <Grid item xs={12} md="auto">
        <Button sx={{borderRadius:1,height:"100%"}}>
            <RepeatIcon sx={{fontSize:36}}/>
            
            </Button>
    </Grid>
    
    </>
  )
}

export default Switchcurrency