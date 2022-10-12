import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'

let useStyles= makeStyles(
    {
        btn:
        {
            marginTop:"140px",
            marginLeft:"550px"
        },
        head:
        {
            textAlign:"center",
            fontFamily:"cursive",
            marginTop:"50px",
            color:"green"
        }
    }
)


function Home() {
    let history = useHistory();
    let moveBook=()=>
    {
        history.push('/book')
    }
    let classes= useStyles();
    return (
        <div>
        <h1 className={classes.head}>Welcome to Booking Cars and Bikes</h1>
        <Typography>
            <Button variant="contained" color="secondary" className={classes.btn} onClick={moveBook}>Select Vehicle</Button>
        </Typography>
        </div>
    )
}

export default Home
