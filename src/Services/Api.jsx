import React from 'react'
import axios from 'axios'

let url1="http://127.0.0.1:3003/users"
let url2="http://127.0.0.1:3003/cars"
let url3="http://127.0.0.1:3003/bikes"
let url4="http://127.0.0.1:3003/historycar"
let url5="http://127.0.0.1:3003/historybike"



let postData=async(user)=>
{
  return await axios.post(url1,user)
}

let getCarData=async(id)=>
{
  return await axios.get(`${url2}/${id}`)
}

let postCars=async(cars)=>
{
   return await axios.post(url4,cars)
}

let getCarDetails=async()=>
{
   return await axios.get(url4) 
}

let deleteCar=async(id)=>
{
  return await axios.delete(`${url4}/${id}`)
}
let postBikes=async(bikes)=>
{
   return await axios.post(url5,bikes)
}
let getBikeData=async(id)=>
{
  return await axios.get(`${url3}/${id}`)
}

let deleteBike=async(id)=>
{
  return await axios.delete(`${url5}/${id}`)
}

let getBikeDetails=async()=>
{
   return await axios.get(url5) 
}
export {postData,getCarData,postCars,getCarDetails,deleteCar,postBikes,getBikeData,deleteBike,getBikeDetails}