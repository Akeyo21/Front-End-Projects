import {createTheme} from '@mui/material/styles';
import HankenGrotesk from './fonts/HankenGrotesk-VariableFont_wght.ttf';
export const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(39, 100%, 56%)',
    },
    secondary: {
      main: 'hsl(0, 100%, 67%)',
    },
    error: {
      main: 'hsl(166, 100%, 37%)',
    },
    warning: {
      main: 'hsl(234, 85%, 45%)',
    },
    info: {
      main: 'hsl(224, 30%, 27%)',
    },
  },
  typography: {
    fontFamily: 'HankenGrotesk',
  },
});

export const white = 'hsl(0, 0%, 100%)';
export const lightRed = 'hsl(0, 100%, 67%)';
const backgroundOpacity = 0.06;
export const redBackground = `hsla(0, 100%, 67%, ${backgroundOpacity})`;
export const yellowBackground = `hsl(39, 100%, 56%, ${backgroundOpacity})`;
export const greenBackground = `hsl(166, 100%, 37%, ${backgroundOpacity})`;
export const blueBackground = `hsl(234, 85%, 45%, ${backgroundOpacity})`;
export const buttonBackground = 'hsl(224, 30%, 27%)';
export const mainBackground = 'linear-gradient(#7857ff, #2e2be9)';
export const faintTextOpactiy = 0.5;

export const backgroundColorMap: Record<string, string> = {
  secondary: redBackground,
  primary: yellowBackground,
  error: greenBackground,
  warning: blueBackground,
};
