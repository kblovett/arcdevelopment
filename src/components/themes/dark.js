import { createMuiTheme } from '@material-ui/core/styles';

// const pMain = '#222831';
// const pLight = '#00adb5';
// const pDark = '#393e46';
// const pCText = '#eeeeee';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    // background: {
    //   paper: `${pDark}`,
    //   default: `${pDark}`,
    // },
  },
});

export { dark };
