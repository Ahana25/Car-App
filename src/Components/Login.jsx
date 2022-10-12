import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import {postData} from '../Services/Api'
import { makeStyles } from '@material-ui/core'

let useStyles= makeStyles(
    {
        form:
        {
            margin:"210px"
        },
        btn:
        {
          margin:"50px",
          marginLeft:"360px"
        },
        head:
        {
            color:"yellow",
            textAlign:"center",
            marginTop:"50px",
            fontFamily:"cursive"
           
        },
    }
)

function Login() {
    let classes= useStyles();
    let history= useHistory();
    let [user,setUser]= useState({
        user:""
    })
    let updateVal=(event)=>
    {
        setUser({...user,[event.target.name]:event.target.value})
    }

let postLoginData=async()=>
{
   await postData(user);
}

    let postUserData=()=>
    {
         postLoginData();
         history.push('/home')

    }
    return (
        <div>
        <Typography>
            <h1 className={classes.head}>Login Page</h1>
        </Typography>
        <FormGroup className={classes.form}>
            <FormControl>
  <InputLabel htmlFor="my-user">Username</InputLabel>
  <Input id="my-user" name="user" value={user.user} onChange={updateVal} autoComplete="off" />
</FormControl>
 <FormControl>
  <InputLabel htmlFor="my-pass">Password</InputLabel>
  <Input id="my-input" name="password" type="password" />
</FormControl>
<Typography>
<Button variant="contained" color="primary" onClick={postUserData} className={classes.btn}>Login</Button>
</Typography>
<Typography> New User?
    <a href="/register">Register Now</a>
</Typography>
</FormGroup>
        </div>
    )
}

export default Login
