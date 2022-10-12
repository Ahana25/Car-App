import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import {cars} from '../Database/Cars'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'



let useStyles= makeStyles(
    {
        table:
        {
            backgroundColor:"blue"
        }
    }
)

function Cars() {

    let postCarUserData=()=>
    {

    }
    let classes= useStyles();
    return (
        <div>

           <TableContainer >
      <Table>
        <TableHead>
          <TableRow className={classes.table}>
            <TableCell>ID</TableCell>
            <TableCell align="center">Car Model</TableCell>
            <TableCell align="center">Seats</TableCell>
            <TableCell align="center">Mileage</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                cars.map((list)=>
                {
                    return(
                        <TableRow >
              <TableCell >
                {list.id}
              </TableCell>
              <TableCell align="center">{list.carmodel}</TableCell>
              <TableCell align="center">{list.seater}</TableCell>
              <TableCell align="center">{list.mileage}</TableCell>
              <TableCell align="center">
                  <Button variant= "contained" color="secondary" to={`/addcar/${list.id}`} component={Link} onClick={postCarUserData}>Book car</Button>
              </TableCell>
            </TableRow>
                    )
                })
            }
        </TableBody>
        </Table>
        </TableContainer>
        </div>
    )
}

export default Cars
