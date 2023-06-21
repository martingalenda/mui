import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {CssBaseline} from "@mui/material";

import PropTypes from 'prop-types';

import {primary, secondary, states} from './palette.config';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CancelIcon from '@mui/icons-material/Cancel'; 
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
      },
      secondary: {
        light: secondary.lightRed,
        main: secondary.baseRed,
        dark: secondary.darkRed
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


    components: {
        // * Botones Txt || Txt + Icon
        MuiButton: {
            defaultProps: {
                style: {
                    padding: "0.563em 1.25em",
                    fontWeight: 'bold',
                    borderRadius: '0.313em',
                    gap: '0.625em',
                    boxShadow: 'none',
                },
            },
            styleOverrides: {
              outlined: ({ theme: currentTheme, ownerState }) => ({
                ...(ownerState.color && ownerState.color !== 'inherit' && {
                  '&:hover': {
                    backgroundColor: currentTheme.palette[ownerState.color].dark,
                    background: currentTheme.palette[ownerState.color].main,
                    color: primary.white,
                  },
                  '&:focus': {
                    background: 'none',
                    color: currentTheme.palette[ownerState.color].main,
                    border: `0.188em solid ${currentTheme.palette[ownerState.color].dark}`,
                  },
                })
              }),
              contained: ({ theme: currentTheme, ownerState }) => ({
                ...(ownerState.color && ownerState.color !== 'inherit' && {
                  '&:focus': {
                    border: `0.188em solid ${currentTheme.palette[ownerState.color].dark}`,
                    outline: 'none',
                  },
                })
              }),
            },
            variants: [
                {
                    props: { variant: 'contained', disabled: true },
                    style: {
                        color: `${primary.white} !important`,
                        background: primary.gray3,
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

        // * Botones Icon
        MuiFab: {
          defaultProps: {
            style: {
              boxShadow: 'none',
            }
          },
          styleOverrides: {
            circular: ({ theme: currentTheme, ownerState }) => ({
              ...(ownerState.color && ownerState.color !== 'inherit' && !ownerState.disabled && {
                '&:hover': {
                  backgroundColor: currentTheme.palette[ownerState.color].dark,
                  color: primary.white,
                },
                '&:focus': {
                  background: currentTheme.palette[ownerState.color].main,
                  color: primary.main,
                  border: `0.188em solid ${currentTheme.palette[ownerState.color].dark} !important`,
                },
              })
            }),
            outlined: ({ theme: currentTheme, ownerState }) => ({
              ...(ownerState.color && ownerState.color !== 'inherit' && !ownerState.disabled && {
                '&.MuiFab-root': {
                  border: `0.063em solid ${currentTheme.palette[ownerState.color].main}`,
                  color: currentTheme.palette[ownerState.color].main,
                },
                '&:hover': {
                  backgroundColor: currentTheme.palette[ownerState.color].main,
                  color: primary.white,
                },
                '&:focus': {
                  background: 'none',
                  color: currentTheme.palette[ownerState.color].main,
                  border: `0.188em solid ${currentTheme.palette[ownerState.color].dark}`,
                },
              }),
              ...(ownerState.disabled && ownerState.variant === "outlined" && {
                '&.MuiFab-root': {
                  background: 'none',
                  border: `0.063em solid ${primary.gray3}`,
                  color: `${primary.gray3} !important`,
                }
              }),
              
            }),
          },
          variants: [
            {
              props: { variant: 'extended' },
              style: {
                padding: "0.563em 1.25em",
              },
            },
            {
              props: { variant: 'circular' },
              style: {
                width: "3em",
                height: "3em",
                borderRadius: '0.313em',
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                width: "3em",
                height: "3em",
                borderRadius: '0.313em',
                background: 'none'
              },
            },
            {
              props: { disabled: true },
              style: {
                color: `${primary.white} !important`,
                background: primary.gray3
              },
            },
          ],
        },


        // * Notificaciones / Alertas
        MuiAlert: {
          defaultProps: {
            iconMapping: {
              warning: <ReportProblemIcon sx={{color: secondary.darkRed }}/>,
              error: <CancelIcon/>,
              success: <CheckCircleIcon/>,
              info: <ErrorOutlineIcon/>,
            },
          },
          variants: [
            {
              props: { severity: 'error', variant: 'outlined' },
              style: {
                background: secondary.lightRed,
                border: `0.063em solid ${secondary.darkRed}`,
              },
            },
            {
              props: { severity: 'warning', variant: 'outlined'  },
              style: {
                background: states.lightOrange,
                border: `0.063em solid ${secondary.baseRed}`,
              },
            },
            {
              props: { severity: 'info', variant: 'outlined' },
              style: {
                background: primary.lightBlue,
                border: `0.063em solid ${primary.darkBlue}`,
              },
            },
            {
              props: { severity: 'success', variant: 'outlined' },
              style: {
                background: states.lightGreen,
                border: `0.063em solid ${states.baseGreen}`,
              },
            }
          ]
        },
        MuiAlertTitle: {
          defaultProps: {
            style: {
                color: primary.black,
                fontSize: '1em',
                fontWeight: '400',
                letterSpacing: '0',
                lineHeight: '1.2',
                display: 'flex',
            }
          },
        },

        // * Checkbox


        // * Radiobox
        MuiRadio: {
          defaultProps: {
            style: {
              color: primary.gray1,
            }
          }
        },

        // * Switch
        MuiSwitch: {
          styleOverrides: {
            root: {
              '& .MuiSwitch-input': {
                backgroundColor: primary.black,
              },
              '& .MuiSwitch-thumb': {
                backgroundColor: primary.white,
                width: '1em',
                height: '1em',
              },
              '& .MuiSwitch-track': {
                backgroundColor: primary.black,
                opacity: 1,
                height: '1.042em',
                width: '2.083em'
              },
              '& .css-14qw32j-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
                backgroundColor: primary.instBlue,
                opacity: 1,
              },
            },
          },
        },


        // * Tooltip
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              backgroundColor: primary.black,
              '& .MuiSvgIcon-root': {
                width: '0.833em',
                height: '0.833em',
              },
              '& span': {
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
              },
            },
            arrow: {
              color: primary.black,
            },
          },
        }

    },

    // * Breakpoints *
    breakpoints: {
      values: {
        md: 1366, // 1366 x 768
        lg: 1600, // 1600 x 900
        xl: 1920, // 1920 x 1080
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