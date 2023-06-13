import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {CssBaseline} from "@mui/material";

import PropTypes from 'prop-types';

import {primary, secondary, states} from './palette.config' 

const theme = createTheme({
    // * Colores *
    palette: {
      mode: 'light',
      background: {
        default: primary.gray4,
        paper: primary.gray5,
      },
      primary: {
        light: primary.lightBlue,
        main: primary.instBlue,
        dark: primary.darkBlue,
        gray1: primary.gray1,
      },
      secondary: {
        main: '#c75154',
        dark: '#fe6d71'
      },
      text: {
        primary: primary.gray1,
        secondary: primary.gray2,
        disabled: primary.gray3,
      },
      error: {
        main: secondary.baseRed,
        light: secondary.lightRed,
        dark: secondary.darkRed,
      },
      warning: {
        main: states.baseOrange,
        light: states.lightOrange,
      },
      success: {
        main: states.baseGreen,
        light: states.lightGreen,
      },
      divider: primary.gray3,
    },

    // * Tipografia *
    typography:{
        fontFamily: "'Open Sans', sans-serif",
        htmlFontSize: 16,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        color: primary.gray1,
        // ! Títulos principales
        h1: {
          fontSize: '1.5em',
          color: primary.gray1,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        // ! Títulos secundarios
        h2: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        h3: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        h4: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        h5: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        h6: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        subTitle1: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        subTitle2: {
          fontSize: '1em',
          color: primary.gray2,
          letterSpacing: '0',
          lineHeight: '1.2',
          fontWeight: '600',
        },
        // ! Cuerpo 1 Regular
        // Texto general - Placeholders - Inputs - Campos de datos
        body1: {
          fontSize: '1em',
          fontWeight: '400',
          letterSpacing: '0',
          lineHeight: '1.2',
        },
        // Texto resaltado - Texto datos relevantes
        body1SB: {
          fontSize: '0.75em',
          fontWeight: '600',
          letterSpacing: '0',
          lineHeight: '1.2',
        },
        
        // ! Cuerpo 1 Semibold
        // Inputs labels - Captions - Títulos columnas
        body2: {
          fontSize: '0.75em',
          fontWeight: '400',
          letterSpacing: '0',
          lineHeight: '1.2',
        },
        // Texto columnas - Texto resaltado en tablas - Tooltips
        body2SB: {
          fontSize: '0.75em',
          fontWeight: '600',
          letterSpacing: '0',
          lineHeight: '1.2',
        },
        // ! Botones
        button: {
          fontSize: '1em',
          fontWeight: '600',
          letterSpacing: '0',
          lineHeight: '1.2',
          textTransform: 'capitalize',
          color: primary.white,
        }
    },

    // * Componentes *
    components: {
        // ! Botones
        MuiButton: {
            defaultProps: {
                style: {
                    padding: "0.563em 1.25em",
                    fontWeight: 'bold',
                    borderRadius: '0.313em',
                    gap: '0.625em',
                    boxShadow: 'none',
                }
            },
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                      '&:focus': {
                        border: `0.188em solid ${primary.darkBlue}`,
                        outline: 'none',
                      },
                    },
                },
                {
                    props: { variant: 'contained', disabled: true },
                    style: {
                        color: `${primary.white} !important`,
                        background: primary.gray3,
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        '&:hover': {
                          background: primary.instBlue,
                          color: primary.white,
                        },
                        '&:focus': {
                          background: 'none',
                          color: primary.instBlue,
                          border: `0.188em solid ${primary.darkBlue}`,
                        },
                      },
                },
                {
                    props: { variant: 'outlined', disabled: true },
                    style: {
                        color: primary.gray3,
                        border: `0.063em solid ${primary.gray3}`,
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

    // * Breakpoints *
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