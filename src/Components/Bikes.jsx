import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import {bikes} from '../Database/Bikes'
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

function Bikes() {
    let classes= useStyles();
    return (
        <div>

           <TableContainer >
      <Table>
        <TableHead>
          <TableRow className={classes.table}>
            <TableCell>ID</TableCell>
            <TableCell align="center">Bike Model</TableCell>
            <TableCell align="center">Mileage</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                bikes.map((list)=>
                {
                    return(
                        <TableRow >
              <TableCell >
                {list.id}
              </TableCell>
              <TableCell align="center">{list.bikename}</TableCell>
              <TableCell align="center">{list.mileage}</TableCell>
              <TableCell align="center">
                  <Button variant= "contained" color="secondary" component={Link} to= {`/addbike/${list.id}`}>Book Bike</Button>
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

export default Bikes

