import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Apikey = (url) => {
// creaating state for holding array of api ,error,loaded
    // const [data,setData]=useState()
    // const [error,setError]=useState(null)
    // const [loaded,setLoaded]=useState(false)

    // to updaate dom and handling data
    // syntax --- useeeffect(function,dependency)
// useEffect(()=>{

    // asynchronous function call
//const fetchData = async()=>{
//try{
   // setLoaded(true)
    // Axios is an HTTP client library
    //const response=await axios(url)
//setData(response.data)
//}
// catch(error){
// setError(error)
// console.log(error);
// }
// finally is a method or block of code that alwaays exxecuted when handling errors with try or catch block or a promise
//  It is executed regardless of the outcome of the try and catch block or the promise
// finally{
// setLoaded(false)
// }
// }
// fetchData()
// },[url])


//   return [data,error,loaded]


const [data,setData]=useState([])
const [error,setError]=useState(true)
const [loading,setLoading]=useState(null)

// useEffect(()=>{
//     axios('https://restcountries.com/v3.1/all')
//     .then((response)=>{
//         console.log(response);
//         setData(response.data)
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error);
//         setError(error)
//     }).finally(()=>{
//         setLoading(false)
//     })
    
// },[])

useEffect(()=>{
    getData()
    // console.log(data)


},[])

async function getData(){
  return  await axios('https://restcountries.com/v3.1/all')
    .then((response)=>{
        setData(response.data)
        // console.log(data);
    })
    .catch((error)=>{
        
        setError(error)
        console.log(error);
    })
    .finally(()=>{
        setLoading(false);
    })
}
// if(loading){
//     return "Loading------"
// }
// if(error){
//     return "Error?"
// }
//  console.log(data);







// return [data,error,loading]

}

export default Apikey