import  { useEffect, useState } from 'react'
import axios from 'axios'
const useAxios = (url) => {
// js code
// create state to hold data,error,loaded

const [data,setData]=useState([])
const [error,setError]=useState(null)
const [loaded,setLoaded]=useState(false)

// to update DOM / fetch api
useEffect(()=>{
const fetchData = async()=>{

try{
    // setlLoaded(true);

 //const response= await axios(url)
 const response= await axios(url)
setData(response.data)
console.log(data)
setLoaded(true);
}

catch(error){
    setError(error)
console.log(error);
}

finally{
setLoaded(false)
}

// if(loaded){
//          return "Loading------"
//      }
//  if(error){
//          return "Error?"
//      }
}

fetchData()
})


return [data,error,loaded]
//   return (
//     <>
    
    
    
    
    
//     </>
//   )
}

export default useAxios