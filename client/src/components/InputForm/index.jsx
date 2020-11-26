import React from 'react';
import PropTypes from 'prop-types';
import ColorBtns from '../ColorBtns';

import './styles.css';

function InputForm(props) {
  const {
    handleSubmit, inputValue, onChange, colors, handleClickColor,
  } = props;
  return (
    <form id="text" onSubmit={handleSubmit}>
      <label htmlFor="add" className="new_item">
        <input
          value={inputValue}
          onChange={onChange}
          id="new-task"
          maxLength="100"
          type="text"
          size="35"
          placeholder="Add New Item"
        />
      </label>
      <ColorBtns
        colors={colors}
        handleClickColor={handleClickColor}
      />
    </form>
  );
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  colors: PropTypes.instanceOf(Array).isRequired,
  handleClickColor: PropTypes.func.isRequired,
};

export default InputForm;
