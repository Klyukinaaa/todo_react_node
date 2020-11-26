import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ItemColor(props) {
  const {
    i, item, clickColor, click,
  } = props;
  return (
    <span role="presentation" className={`btn ${click ? 'active' : ' '}`} onClick={() => clickColor(i)}>
      <input id="button" type="button" style={{ backgroundColor: item.backgroundColor }} />
    </span>
  );
}

ItemColor.propTypes = {
  i: PropTypes.number.isRequired,
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  clickColor: PropTypes.func.isRequired,
  click: PropTypes.bool.isRequired,
};

export default ItemColor;
