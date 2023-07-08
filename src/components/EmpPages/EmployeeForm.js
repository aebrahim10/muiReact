import React, {useState} from 'react';
import { makeStyles, Grid} from '@material-ui/core';
import Controls from './../EmpComponents/controls/Controls'

const useStyles = makeStyles(theme =>({
    root:{

        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}))
const initValues ={
    fullName:'',
    email:'',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}
export default function EmployeeForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initValues)
  const handleInputChange = e =>{
    const [name, value] = e.target
    setValues({
        ...setValues,
        [name]:value
    })
  }
  return (
    <form className={classes.root}>
        <Grid container>
            <Grid item xs={6}>
                <Controls.Input name='fullName' label='Full Name' value={values.fullName}  onChange={handleInputChange} >
                </Controls.Input>
            
                <Controls.Input name='email' label='Email' value={values.email} onChange={handleInputChange} />
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>

    </form>
  )
}
