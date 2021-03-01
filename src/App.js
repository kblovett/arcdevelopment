import React from 'react';
import { Header } from './components';

import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { dark, light } from './components/themes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Header />
        Hello!
      </Container>
    </ThemeProvider>
  );
}

export default App;

/* <Box my={2}>
  {[...new Array(240)]
    .map(
      () => `Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
    )
    .join('\n')}
</Box> */
