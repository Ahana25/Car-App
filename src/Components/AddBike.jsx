import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getBikeData, postBikes} from '../Services/Api';

function AddBike() {
    let history=useHistory();
    let postAllBikes=async()=>
    {
      await postBikes(bikes)
    }
    let moveAll=()=>
    {
        postAllBikes();
        history.push('/historybike')
    }
    let [bikes,setBikes]= useState(
        {
            name:"",
            to:"",
            from:"",
            bikename:"",
            mileage:""
        }
    )
let updateVal=(event)=>
{
  setBikes({...bikes,[event.target.name]:event.target.value})
}

    let {id}= useParams();

    let getBikeUserData=async()=>
    {
        let res = await getBikeData(id);
        setBikes(res.data)
    }
    useEffect(()=>
    {
        getBikeUserData();
    },[])
    return (
        <div>
        <FormGroup>
            <FormControl>
  <InputLabel htmlFor="my-input">Full Name</InputLabel>
  <Input id="my-input" name="name" value={bikes.name} onChange={updateVal}/>

</FormControl>
<FormControl>
Book From<InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" type="date" name="from" value={bikes.from} onChange={updateVal}/>
</FormControl>
<FormControl>
Book Till<InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" type="date" name="to" value={bikes.to} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input" >Bike Name</InputLabel>
  <Input id="my-input" name="bikename" value={bikes.bikename} onChange={updateVal}/>

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Mileage</InputLabel>
  <Input id="my-input" name="mileage" value={bikes.mileage} onChange={updateVal}/>
</FormControl>
<Typography>
    <Button variant="contained" color="primary" onClick={moveAll}>Confirm Booking</Button>
</Typography>
</FormGroup>
        </div>
    )
}

export default AddBike

