//--------------------   Components/Home.jsx
import React from 'react';
import { Paper, Input,Typography, AppBar, Button, Card, CardActions, CardMedia, CardContent, Grid, Container, Toolbar} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from '../style/homeStyles'
//import theme from '../style/Styles'

//import {makeStyles} from '@mui/styles'
// const useStyles = makeStyles((theme) =>({  //this method of style will clog our view so we adopt the styling in style.js file
//     container:{
//         backgroundColor:theme.palette.background.paper,
//         padding:theme.spacing(8,0,6)
//     }
// }))
//-------------
// const style={
//     mt:8,
//     backgroundColor: { xs:'secondary.light', sm:'#880808'}
// }

const Home =() =>{
   const classes=useStyles();
   console.log("the style classes are " )
   console.log(classes)
   console.log("-------------------")
    return(
        <>
                <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon}/>
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* <div sx={{...style}}> */}
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant='h2' align='center' color='textPrimary' className={classes.title} gutterbuttom='true'>Photo Album</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Hello everyone. This is a photo album and I am trying to make this sentence as long as possible so that we can see how does it look on the screen.
                        </Typography>
                        <div className={classes.button}>
                        <Grid container spacing={2} justify="center">
                           <Grid item>
                            <Button variant="contained" color="primary">
                                see Photos
                            </Button>
                           </Grid>
                           <Grid item>
                            <Button variant="outlined" color="secondary">
                                secondary Actions
                            </Button>
                           </Grid>
                        </Grid>
                        
                        </div>


                    </Container>
                </div>
            </main>
            <Container sx={{maxWidth:'100px', marginTop:'50px',background: 'blue',}}>
                <Paper sx={{ maxWidth:'200px',marginTop:'2rem', padding:'1rem'}}>
                    <Input fullWidth placeholder='Firstname:' />
                    <Input fullWidth placeholder='Lastname:' />
                    <Input fullWidth placeholder='Email:' />
                    <Button variant='contained' color='primary'>Submit</Button>
                </Paper>
            </Container>
         </>
    )
}
export default Home;
