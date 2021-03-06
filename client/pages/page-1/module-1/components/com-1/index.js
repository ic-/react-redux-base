import React from 'react';
import PropTypes from 'prop-types';

const Com1 = ({children, module1}) => {
  return (
    <div>
      {children && React.cloneElement(children, {
        module1
      })}
    </div>
  );
};

Com1.propTypes = {
  children: PropTypes.node,
  module1: PropTypes.object
};

export default Com1;
