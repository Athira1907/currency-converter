
        import InputAmount from './Components/InputAmount'
        import Selectcountry from './Components/Selectcountry'
        import Switchcurrency from './Components/Switchcurrency'
        import { Button ,Container,Grid,Typography} from '@mui/material';
import './App.css';
import { useState } from 'react';
//import axios from 'axios'
function App() {

const [fromCurrency,setFromCurrency]=useState("")
const [toCurrency,setToCurrency]=useState("")




const boxStyles={
  background:"#fdfdfd",
  textAlign:"center",
  color:"#222",
  minHeight:"20rem",
  borderRadius:"2",
  padding:"4rem 2rem",
  boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)",
  marginTop:"3rem"

}


  return (
    <>
     <div>
      {/* The sx prop is a shortcut for defining custom styles that has access to the theme. */}
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h4' sx={{marginTop:'4rem'}}>
          Stay Ahead with Accurate Conversions
        </Typography>
      <Button>click here</Button>
<Grid container spacing={4}>

  <InputAmount/>
  <Selectcountry value={fromCurrency} setValue={setFromCurrency} label="From"/>
  <Switchcurrency/>
  <Selectcountry value={toCurrency} setValue={setToCurrency} label="To"/>

</Grid>
      </Container>
     
      
     </div>
    </>
  );
}

export default App;
