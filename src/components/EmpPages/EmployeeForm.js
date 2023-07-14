import React, {useState} from 'react';
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
export default function EmployeeForm() {
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
    const {name, value} = e.target 
        setValues({
            ...values,
            [name]:value
        })
        console.log("Values in handleInputChange", values)
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
          window.alert("testing ...")
          employeeService.insertEmployee(values)
    }
  }
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
               <Controls.RadioGroup name='gender' value={values.gender} label='Gender' items={genderItems} 
                  onchange={handleInputChange} />
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
