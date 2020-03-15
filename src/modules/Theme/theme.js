import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      black: 'rgba(31, 31, 31, 1)',
      white: '#fff',
    },
    background: {
      paper: 'rgba(255, 250, 240, 1)',
      default: 'rgba(255, 250, 240, 1)',
    },
    primary: {
      light: 'rgba(113, 92, 87, 1)',
      main: 'rgba(78, 52, 46, 1)',
      dark: 'rgba(54, 36, 32, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(253, 215, 161, 0.5)',
      main: 'rgba(253, 206, 138, 1)',
      dark: 'rgba(177, 144, 96, 0.5)',
      contrastText: 'rgba(49, 30, 25, 1)',
    },
    error: {
      light: 'rgba(203, 91, 91, 1)',
      main: 'rgba(215, 45, 31, 1)',
      dark: 'rgba(160, 28, 28, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(48, 38, 38, 0.87)',
      secondary: 'rgba(49, 38, 38, 0.54)',
      disabled: 'rgba(43, 27, 27, 0.38)',
      hint: 'rgba(41, 28, 28, 0.38)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // Adjust spacing to reach minimal touch target hitbox
        marginLeft: 4,
        marginRight: 0,
        padding: 4,
      },
    },
    MuiOutlinedInput: {
      marginDense: {
        padding: 4,
      },
      input: {
        textAlign: 'center',
        fontSize: 24,
      },
    },
  },
});

export default theme;
