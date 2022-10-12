import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getCarData, postCars } from '../Services/Api';

function AddCar() {
    let history=useHistory();
    let postAllCars=async()=>
    {
      await postCars(cars)
    }
    let moveAll=()=>
    {
        postAllCars();
        history.push('/historycar')
    }
    let [cars,setCars]= useState(
        {
            name:"",
            to:"",
            from:"",
            carmodel:"",
            seater:"",
            mileage:""
        }
    )
let updateVal=(event)=>
{
  setCars({...cars,[event.target.name]:event.target.value})
}

    let {id}= useParams();

    let getCarUserData=async()=>
    {
        let res = await getCarData(id);
        setCars(res.data)
    }
    useEffect(()=>
    {
        getCarUserData();
    },[])
    return (
        <div>
        <FormGroup>
            <FormControl>
  <InputLabel htmlFor="my-input">Full Name</InputLabel>
  <Input id="my-input" name="name" value={cars.name} onChange={updateVal}/>

</FormControl>
<FormControl>
Book From<InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" type="date" name="from" value={cars.from} onChange={updateVal}/>
</FormControl>
<FormControl>
Book Till<InputLabel htmlFor="my-input"></InputLabel>
  <Input id="my-input" type="date" name="to" value={cars.to} onChange={updateVal}/>
</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input" >Car Model</InputLabel>
  <Input id="my-input" name="carmodel" value={cars.carmodel} onChange={updateVal}/>

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input" >Car Seats</InputLabel>
  <Input id="my-input" name="seater" value={cars.seater} onChange={updateVal} />

</FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Mileage</InputLabel>
  <Input id="my-input" name="mileage" value={cars.mileage} onChange={updateVal}/>
</FormControl>
<Typography>
    <Button variant="contained" color="primary" onClick={moveAll}>Confirm Booking</Button>
</Typography>
</FormGroup>
        </div>
    )
}

export default AddCar
