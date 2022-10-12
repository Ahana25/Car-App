import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteCar, getCarDetails } from '../Services/Api';


function HistoryCar() {

  

  let [cars,setCars]= useState([])
  let getAllCarDetails=async()=>
  { 
     let res=await getCarDetails();
     setCars(res.data)

  }
  let deleteCarData=async(id)=>
  {
     await deleteCar(id)
     getAllCarDetails();
  }
  useEffect(()=>
  {
      getAllCarDetails();
  },[])
    return (
        <div>
        <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Car Model</TableCell>
            <TableCell align="center">Seater</TableCell>
            <TableCell align="center">Mileage</TableCell>
            <TableCell align="center">From</TableCell>
            <TableCell align="center">To</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

       {cars.map((list)=>
       {
          return(
            <TableRow >
              <TableCell align="center">{list.id}</TableCell>
              <TableCell align="center">{list.carmodel}</TableCell>
              <TableCell align="center">{list.seater}</TableCell>
              <TableCell align="center">{list.mileage}</TableCell>
              <TableCell align="center">{list.from}</TableCell>
              <TableCell align="center">{list.to}</TableCell>
              <Button variant="contained" color="secondary" onClick={()=>deleteCarData(list.id)} >Cancel booking</Button>
            </TableRow>
          )
       })}

        </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default HistoryCar
