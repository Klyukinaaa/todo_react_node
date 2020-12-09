import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {faTrash} from '@fortawesome/free-solid-svg-icons' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './styles.css';

function TodoItem(props) {
  const {
    text, check, onclick, id, color, deleteItem, handleText
  } = props;

  const [showEdit, setShowEdit] = useState(false)

  const style = {
    backgroundColor: color,
  };
  const styleCheck = {
    backgroundColor: '#b1b1b1',
  };

  const textInput = useRef(null);

  useEffect(() => {
    if (showEdit) {
      textInput.current && textInput.current.focus()
    }
  }, [showEdit])

  const itemStyle = check ? styleCheck : style;
  return (
      <li>
        <label htmlFor={id} className="checkbox" style={itemStyle}>
          <input id={id} onChange={() => onclick(id)} type="checkbox" checked={check}/>
        </label>
        <div style={itemStyle} className="task">
          {
            showEdit ?
                <label>
                  <input style={itemStyle}
                         onBlur={
                           (event) => handleText(id, event)
                               && setShowEdit(false)
                         }
                         defaultValue={text}
                         ref={textInput}
                         type="text"
                         className="input_patch"/>
                </label>
                : <span id="span_patch" onDoubleClick={() => setShowEdit(true)}>{text}</span>
          }
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
