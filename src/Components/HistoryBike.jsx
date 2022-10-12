import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteBike, getBikeDetails } from '../Services/Api';


function HistoryBike() {

  

  let [bikes,setBikes]= useState([])
  let getAllBikeDetails=async()=>
  { 
     let res=await getBikeDetails();
     setBikes(res.data)

  }
  let deleteBikeData=async(id)=>
  {
     await deleteBike(id)
     getAllBikeDetails();
  }
  useEffect(()=>
  {
      getAllBikeDetails();
  },[])
    return (
        <div>
        <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Bike Name</TableCell>
            <TableCell align="center">Mileage</TableCell>
            <TableCell align="center">From</TableCell>
            <TableCell align="center">To</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

       {bikes.map((list)=>
       {
          return(
            <TableRow >
              <TableCell align="center">{list.id}</TableCell>
              <TableCell align="center">{list.bikename}</TableCell>
              <TableCell align="center">{list.mileage}</TableCell>
              <TableCell align="center">{list.from}</TableCell>
              <TableCell align="center">{list.to}</TableCell>
              <Button variant="contained" color="secondary" onClick={()=>deleteBikeData(list.id)} >Cancel booking</Button>
            </TableRow>
          )
       })}

        </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default HistoryBike
