import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

import './styles.css';

function ItemsList(props) {
  const { items, handleCheck, deleteItem, handleText } = props;
  const listItems = items.map((item) => (
    <TodoItem
      handleText={handleText}
      key={item.id}
      color={item.color}
      check={item.completed}
      onclick={handleCheck}
      id={item.id}
      text={item.task}
      deleteItem={deleteItem}
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
