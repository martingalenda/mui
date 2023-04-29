import { createTheme } from "@mui/material";
import {  ThemeProvider} from "@mui/material";
import {  CssBaseline} from "@mui/material";

import PropTypes from 'prop-types';

const theme = createTheme({
    // Colores:
    palette: {
      mode: 'dark',
      background: {
        default: '#101010',
        paper: '#050404',
      },
      primary: {
        main: '#c3a558',
        dark: '#f9d781'
      },
      secondary: {
        main: '#c75154',
        dark: '#fe6d71'
      },
      divider: '#494949'
    },
    // Tipografia
    typography:{
        fontFamily: "'Blinker', sans-serif",
        h1: {
          fontSize: '6em',
        },
        h2: {
          fontSize: '5em',
          color: 'blue',
        },
        h3: {
          fontSize: '4em',
        },
        h4: {
          fontSize: '3em',
        },
    },
    // Componentes
    components: {
        MuiButton: {
            defaultProps: {
                style:{
                    padding: "0.5em 3em",
                    fontWeight: 'bold'
                }
            },
            variants: [
                {
                  props: { variant: 'contained' },
                  style: {
                    color: '#101010', 
  
                  },
                },
                {
                    props: { variant: 'gradient' },
                    style: {
                      background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
                      color: '#101010',
                      '&:hover': {
                        background: 'linear-gradient(to right, #FF5F6D, #FFC371)',
                      },
                    },
                },
            ],
        },
        MuiFab: {
          variants: [
            {
              props: { variant: 'extended' },
              style: {
                width: "10em", 
                height: "3em", 
              },
            },
            {
              props: { variant: 'circular' },
              style: {
                width: "3em",
                height: "3em",
              },
            },
          ],
        },
    },
    // Breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1920,
        xxxl: 2560,
        xxxxl: 3200,
      },
    },
  });

export const ThemeConfig = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

ThemeConfig.propTypes = {
    children: PropTypes.node.isRequired,
};