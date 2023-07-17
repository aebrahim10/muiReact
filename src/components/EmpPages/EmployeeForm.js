import React, {useEffect, useState} from 'react';
import { makeStyles, Grid, } from '@material-ui/core';
import Controls from './../EmpComponents/controls/Controls';
import * as employeeService from '../EmpServices/employeeService'

const useStyles = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}))
const genderItems=[
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female'}
]
const initValues ={
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}
export default function EmployeeForm(props) {
  const {addOrEdit, recordForEdit} = props
  const classes = useStyles();
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({})

  const validate = (fieldValues = values) =>{ 
    let temp={...errors}
    if ('fullName' in fieldValues)
      temp.fullName= fieldValues.fullName ? "" : "The name is required."
    if('email' in fieldValues)
      temp.email= (/$^|.*@.*.*/).test(fieldValues.email)? "" : "The email is not valid."
     if('mobile' in fieldValues)     
      temp.mobile= (fieldValues.mobile.length>9)?"" : "Minimum 10 numbers are required."
    if('departmentId' in fieldValues)
      temp.departmentId= (fieldValues.departmentId!=="")?"" : "The department is required."
     setErrors({ ...temp})
    console.log("temp ========================= ",temp);
    console.log("errors ======================================= ",errors);
    
    if (fieldValues == values)
    return Object.values(temp).every(x => x == "")
  }
  const handleInputChange = e =>{
    let validateOnChange=true
    const {name, value} = e.target 
        setValues({
            ...values,
            [name]:value
        })
        if (validateOnChange)
        validate({ [name]: value })
  }
  
  const resetForm = () =>{
    setValues(initValues);
    setErrors({})
  }
  const handleSubmit = e =>{
    e.preventDefault()
    console.log("Values in SubmitFn========================= ",values);
    console.log("Errors in SubmitFn========================= ",errors);
    if (validate()){
        addOrEdit(values, resetForm)
    }
  }
  useEffect(()=>{
    if (recordForEdit != null)
        setValues({...recordForEdit})  
  }, [recordForEdit])
  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <Grid container>
            <Grid item xs={6}>
                 <Controls.Input name='fullName' label='Full Name' value={values.fullName} 
                      onChange={handleInputChange} error={errors.fullName}/>       
                <Controls.Input name='email' label='Email' value={values.email} 
                      onChange={handleInputChange} error={errors.email}/>
                  <Controls.Input name='mobile' label='Mobile' value={values.mobile}
                      onChange={handleInputChange} error={errors.mobile} />
                  <Controls.Input name='city' label='City' value={values.city}
                      onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>
               <Controls.RadioGroup name='gender' label='Gender' value={values.gender} items={genderItems} 
                  onChange={handleInputChange} />
               <Controls.Select name='departmentId' value={values.departmentId} label="Department" 
                  onChange={handleInputChange} options={employeeService.getDepartmentCollection()} />
               <Controls.DatePicker name='hireDate' value={values.hireDate} label='Date employed'
                  onChange={handleInputChange} />
               <Controls.Checkbox name='isPermanent' value={values.isPermanent} label='Permanent Employee'
                  onChange={handleInputChange} />
               <div>
                <Controls.Button type="submit" text="Submit" />
                <Controls.Button type="button" text="Reset" color="default" onClick={resetForm}/>
               </div>
            </Grid>
        </Grid>
    </form>
  )
}
