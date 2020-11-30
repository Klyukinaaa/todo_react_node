import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Input(props) {
  const {handleEmailChange, handlePasswordChange} = props;
  return (
      <div>
        <input
            className="date"
            type="email"
            name="email"
            placeholder="Email:"
            onChange={handleEmailChange}
        />
        <input
            className="date"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
        />
      </div>
  )
}

Input.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default Input;
