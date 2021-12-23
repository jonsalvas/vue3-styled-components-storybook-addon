 import { withThemeProvider } from "../withThemeProvider";
 export const darkTheme = {
     backgroundColor: "#333333",
     textColor: "#FFFFFF",
     primary: "#77ccdd"
   };
   
   export const lightTheme = {
     backgroundColor: "#e0e0e0",
     textColor: "#000000",
     primary: "#55aacc"
   };
   
   export const partyTheme = {
     backgroundColor: "#eeff00",
     textColor: "#ff88cc",
     primary: "#aa00ee"
   };
 
   export const themes: any = {
     darkTheme, lightTheme, partyTheme
   }
 
 export const decorators = [withThemeProvider(themes)];
 
 