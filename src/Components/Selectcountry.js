import React, { useCallback } from 'react'
import { Grid,Autocomplete ,TextField,Skeleton} from '@mui/material';
import useAxios from '../hooks/useAxios';
 //import Apikey from '../hooks/Apikey';

 import axios from 'axios'

function Selectcountry(props) {
  const {value,setValue,label}=props
  const [data,error,loaded]=useAxios('https://restcountries.com/v3.1/all')

if(loaded){
  return(
    <Grid item xs={13} md={3}>

{/* A Skeleton Component is used whenever the data is not loaded,
 the placeholder preview is to be shown to the user. */}

<Skeleton variant="rounded" height={60}></Skeleton>


    </Grid>
  )
}
if(error){
  return "Something went wrong!!"
}
const dataFilter=data.filter(item=>"currencies" in item)
//console.log(dataFilter)
 const dataCountries=dataFilter.map(item=>{
  return `${Object.keys(item.currencies)[0]}-${item.name.common}`
 })
console.log(dataCountries);
  //console.log(data);
//console.log(props.data);
//  const [data]= Apikey("https://restcountries.com/v3.1/all")
//  console.log(data);
//  const [data]=Apikey('https://restcountries.com/v3.1/currency/cop')
// const [api]=Apikey(data)
//   console.log(api);
// const [array]=Apikey(setData)
// console.log(array);
// const array= useCallback(()=>{
//   getData()
//   console.log(array);
// })

  return (
    <>
    
    
    <Grid item xs={13} md={3}>
        {/* The JavaScript spread operator
         (...) allows us to quickly copy all or part of an existing array or object into another array or object. */}
        <Autocomplete 
        value={value}
        onChange={(event,newValue)=>{
          setValue={newValue}
        }}
        options={dataCountries} 
        renderInput={(params)=><TextField  {...params} label={label} />}>

        </Autocomplete>
    </Grid>
    {/* <Apikey  /> */}
   
    </>
  )
}

export default Selectcountry