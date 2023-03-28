import React from 'react';
import { orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles';

function CustomTheme(){
    const theme = createTheme({
        palette: {
          primary: {
            main: orange[500],
          },
          secondary: {
            main: orange[50],
          },
        },
        components: {
            // Name of the component
            MuiAlert: {
              styleOverrides: {
                root: {
                    backgroundColor: orange[800],
                    color: orange[50],
                    fontSize:'1rem',
                    borderRadius:'15px',
                    zIndex:2,
                },
              },
            },
            MuiButton:{
              styleOverrides: {
                root: {
                  fontSize: '1rem',
                  backgroundColor:orange[500],
                  marginLeft:'10px',
                },
            },
          },
      }});
    return theme;
}

export{
    CustomTheme
}