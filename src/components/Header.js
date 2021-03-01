import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = (props) => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography>Arc Development</Typography>{' '}
      </Toolbar>
    </AppBar>
  );
};

export { Header };
