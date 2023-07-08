import React from 'react'
import { AppBar, InputBase, Toolbar, IconButton, Badge, Grid, makeStyles} from '@material-ui/core';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme =>({
    root :{
        backgroundColor:'#fff',
        paddingLeft : '320px'
    },
    searchInput :{
        opacity: '0.6',
        padding :`0px ${theme.spacing(1)}px`,
        fontSize : '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))
export default function Header() {
    const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
        <Toolbar >
            <Grid container alignItems="center">
                <Grid item>
                    <InputBase
                      placeholder="Search"
                      className = {classes.searchInput}
                      startAdornment ={<SearchIcon fontSize="small" />} /> 
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>    
  )
}
