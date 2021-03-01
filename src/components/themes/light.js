import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, green, blueGrey } from '@material-ui/core/colors';

const light = createMuiTheme({
  palette: {
    type: 'light',
    // primary: blueGrey,
    // secondary: green,
  },
  status: {
    danger: deepOrange,
  },
});

export { light };
