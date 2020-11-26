import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

import './styles.css';

function ItemsList(props) {
  const { items, handleCheck } = props;
  const listItems = items.map((item) => (
    <TodoItem
      color={item.color}
      check={item.checked}
      onclick={handleCheck}
      id={item.id}
      text={item.value}
    />
  ));
  return (
    <div>
      <ul className="todo item">
        <div>
          {listItems}
        </div>
      </ul>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default ItemsList;
