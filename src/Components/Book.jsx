import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router'

let useStyles= makeStyles(
    {
        form:
        {
            margin:"200px"
        },
        btn:
        {
            marginLeft:"340px",
            marginTop:"50px"
        },
        head:
        {
            color:"yellow",
            textAlign:"center",
            marginTop:"60px",
            fontFamily:"cursive "

        }
    }
)
function Book() {
    let history= useHistory();
    let moveBike=()=>
    {
        history.push('/bikes')
    }
    let moveCar=()=>
    {
        history.push('/cars')
    }
    let classes= useStyles();
    return (
        <div>
        <Typography>
            <h1 className={classes.head}>Select Option</h1>
        </Typography>
        <FormGroup className={classes.form}>
        <FormControl>
        Enter pick-up date<InputLabel htmlFor="my-godate" placeholder="Enter the date of pick-up"></InputLabel>
  <Input id="my-input" type="date"  />
</FormControl>
<FormControl>
  Enter drop date<InputLabel htmlFor="my-returndate"></InputLabel>
  <Input id="my-input" type="date"/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-type"></InputLabel>
  <FormControlLabel
        control={<Checkbox name="checked" />}
        label="Cars"
      />
        <Typography>
    <Button variant="contained" color="primary" className={classes.btn} onClick={moveCar} >Check Options for cars</Button>
</Typography>
       <FormControlLabel
        control={<Checkbox name="checked"/>}
        label="Bikes"
      />
        <Typography>
    <Button  variant="contained" color="primary" className={classes.btn} onClick={moveBike}>Check options for bikes</Button>
</Typography>
</FormControl>

</FormGroup>

        </div>
    )
}

export default Book
