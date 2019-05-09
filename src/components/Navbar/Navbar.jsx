import React from 'react';

import PropTypes from 'prop-types';

function Navbar() {
  return (
    <header>
<a>HOME</a>
<a>ABOUT</a>
<a>CONTACTS</a>
    </header>
  )
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default React.memo(Navbar);