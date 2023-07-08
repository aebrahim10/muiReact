//--------------------   style/Styles.js
import { createTheme } from "@mui/material/styles";
const Colors={
    primary:"#00adb5",
    secondary:"#95deFb",
    success:"#4CAF50",
    border:"#DDDFE1",
    white:"#fff",
    black:"#000",
}
const theme = createTheme({
    palette:{
        primary:{
            main:Colors.primary},
      
        secondary:{
            main:Colors.secondary} 
    }
});
//Dark mode with custom palette from docs

export default theme
