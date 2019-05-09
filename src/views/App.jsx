import React from 'react';

import PropTypes from 'prop-types';

import '@material/button/dist/mdc.button.css';
import { Button } from '@rmwc/button';

import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Button>BTN</Button>
      </main>
    </>
  )
}

App.propTypes = {
  theme: PropTypes.object,
};

App.defaultProps = {
  theme: {},
};

export default React.memo(App);