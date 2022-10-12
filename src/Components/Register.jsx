import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/styles';


let useStyles= makeStyles(
    {
        form:
        {
            margin:"200px"
        },
        btn:
        {
            margin:"70px",
            marginLeft:"360px"
        },
        head:
        {
            color:"red",
            fontFamily:"cursive",
            textAlign:"center"

        },
        type:
        {
            marginTop:"70px",
        }
    }
)

function Register() {
    let classes= useStyles();
    let history= useHistory();
    let moveLogin=()=>
    {
        history.push('/')
    }
    return (
        <div>
        <Typography className={classes.type}>
            <h1 className={classes.head}>Welcome to the Registation Page</h1>
        </Typography>
        <FormGroup className={classes.form}>
        <FormControl>
  <InputLabel htmlFor="my-name">Full Name</InputLabel>
  <Input id="my-name" />
</FormControl>
    
<FormControl>
  <InputLabel htmlFor="my-username">Username</InputLabel>
  <Input id="my-input" />

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-mail">Email address</InputLabel>
  <Input id="my-input" />

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-password">Password</InputLabel>
  <Input id="my-input" type="password" />

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-phone">Phone</InputLabel>
  <Input id="my-input" />
</FormControl>
<Typography>
    <Button variant="contained" color="secondary" onClick={moveLogin} className={classes.btn}>Register Now</Button>
</Typography>
<Typography>Already a Registered User?
    <a href="/">Login now</a>
</Typography>
</FormGroup>


        </div>
    )
}

export default Register
