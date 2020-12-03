import React from 'react';
import PropTypes from 'prop-types';
import ItemColor from '../ItemColor';

import './styles.css';

function ColorBtns(props) {
  const { colors, handleClickColor, createItem } = props;
  const itemsColor = colors.map((item, index) => (
    <ItemColor
      click={item.selected}
      clickColor={handleClickColor}
      key={index}
      i={index}
      item={item}
      createItem
    />
  ));

  return (
    <span className="color_container">
      <div className="color_btns">
        {itemsColor}
      </div>
      <div className="text_btn">
        <button onClick={createItem} type="submit" id="add">Add</button>
      </div>
    </span>
  );
}

ColorBtns.propTypes = {
  colors: PropTypes.instanceOf(Array).isRequired,
  handleClickColor: PropTypes.func.isRequired,
};

export default ColorBtns;
