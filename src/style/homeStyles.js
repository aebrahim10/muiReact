import { styled} from '@mui/material'
//import {makeStyles} from '@mui/styles'
import { red, yellow } from '@mui/material/colors'
const useStyles = styled((theme) =>({  
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon: {
        marginRight : '200px',

    },
    button : {
        marginTop : '40px',
    },
    title: {
        color : red,
        backgroundColor: yellow,
    }
}))
export default useStyles