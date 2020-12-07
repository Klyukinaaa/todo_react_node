import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ItemColor(props) {
  const {
    i, item, clickColor, selected
  } = props;
  return (
    <span role="presentation" className={`btn ${selected ? 'active' : ' '}`} onClick={() => clickColor(i)}>
      <input className="button" type="button" style={{ backgroundColor: item.backgroundColor }} />
    </span>
  );
}

ItemColor.propTypes = {
  i: PropTypes.number.isRequired,
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  clickColor: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ItemColor;
