import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, green, blueGrey } from '@material-ui/core/colors';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    // primary: blueGrey,
    // secondary: green,
  },
  status: {
    danger: deepOrange,
  },
});

export { dark };
