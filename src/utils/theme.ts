import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import shadows, { Shadows } from '@mui/material/styles/shadows';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#003c8f',  
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    }
  },
  // Typography
  typography: {
    fontFamily: 'Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    body2: {
      fontFamily: 'Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      fontSize: "14px",
    },
    body1: {
      fontFamily: 'Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      fontSize: "16px",
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: shadows.map(() => 'none') as Shadows,
  //Button
});

export default theme;