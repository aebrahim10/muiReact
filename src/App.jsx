//--------------------   app.jsx
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {ThemeProvider } from '@mui/material/styles';
import {CssBaseline } from '@mui/material';
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Employees from './components/Employees'
import ResponsiveAppBar from './components/ResponsiveAppBar';

import theme from './style/Styles'
import Home from './components/Home'
// const style={
//     mt:8,
//     backgroundColor: { xs:'secondary.light', sm:'#880808'}
// }
const App =() =>{
   // const classes=useStyles();
    return(
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />

            <Routes>
                <Route exact path="Home" element={<Home />} />
                <Route exact path="About" element={<About />} />
                <Route exact path="Employees" element={<Employees />} />
                <Route exact path="Projects" element={<Projects />} />
                <Route exact path="Contact" element={<Contact />} />

            </Routes>  
        </ThemeProvider>
        </>
    )
}
export default App;
