import React from 'react';

import './MainFooter.css';

function MainFooter(props) {
  return <footer className="main-footer">{props.children}</footer>;
};

export default MainFooter;