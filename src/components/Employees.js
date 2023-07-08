import React from 'react';
import SideMenu from './EmpComponents/SideMenu'
import Header from './EmpComponents/Header';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import AllEmployees from './EmpPages/AllEmployees';

const theme = createTheme({
     palette:{
        primary :{
          main: '#333996',
          light: '#3c44b126'
        },
        secondary :{
          main: "#f83245",
          light: '#f8324526'
        },
        background: {
          default: "#f4f5fd"
        },
     },
    overrides:{
     MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})
export default function Employees() {
  const classes = useStyles()
  return (
   <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
          <Header />
          <AllEmployees />
      </div>
      <CssBaseline />
   </ThemeProvider>
  )
}
