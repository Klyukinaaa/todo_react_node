import React from 'react';
import PropTypes from 'prop-types';
import {faTrash} from '@fortawesome/free-solid-svg-icons' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './styles.css';

function TodoItem(props) {
  const {
    text, check, onclick, id, color, deleteItem, handleText
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
        <button onClick={() => onclick(id)} className="checkbox" style={itemStyle}>
          <input type="checkbox"/>
        </button>
        <div style={itemStyle} className="task">
          <span onDoubleClick={() => handleText(id)}>{text}</span>
          <FontAwesomeIcon className="btn_delete" onClick={() => deleteItem(id)} icon={faTrash}/>
        </div>
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
