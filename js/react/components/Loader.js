import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute loader">
      <div className="absolute loader__wrapper" />
      <div uk-spinner="ratio: 3" />
    </div>
  );
};

Loader.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Loader;
