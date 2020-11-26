import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function TodoItem(props) {
  const {
    text, check, onclick, id, color,
  } = props;

  const style = {
    backgroundColor: color,
  };
  const styleCheck = {
    backgroundColor: '#b1b1b1',
  };

  const itemStyle = check ? styleCheck : style;
  return (
    <li>
      <div className="checkbox" style={itemStyle}>
        <input id={id} type="checkbox" onChange={() => onclick(id)} />
      </div>
      <label style={itemStyle} htmlFor={id} className="task">
        {text}
      </label>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default TodoItem;
