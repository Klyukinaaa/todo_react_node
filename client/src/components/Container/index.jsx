import React, {useState} from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import axios from "axios";

function Container(props) {
  const [colors, setColors] = useState([
    {
      backgroundColor: '#ef666c',
      selected: false,
    },
    {
      backgroundColor: '#f171a2',
      selected: false,
    },
    {
      backgroundColor: '#8f6ac8',
      selected: false,
    },
    {
      backgroundColor: '#5eb1f3',
      selected: false,

    },
    {
      backgroundColor: '#68d8e3',
      selected: false,
    },
    {
      backgroundColor: '#fde087',
      selected: false,

    },
  ]);

  const [currentItem, setCurrentItem] = useState({
    value: '',
    checked: false,
    id: '',
    color: '',
  });

  const [items, setItems] = useState([]);

  function handleClickColor(i) {
    const newColors = [...colors];
    setColors(newColors.map((item, index) => {
          const newItem = item;
          newItem.selected = i === index;
          return newItem;
        }
        )
    );
  }

  function handleChange(event) {
    setCurrentItem({
      value: event.target.value,
      checked: false,
      id: Date.now(),
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // отменим стандартное поведение браузера
    const newItem = currentItem;
    const newColors = [...colors];
    const activeCheckbox = newColors.find((item) => item.selected);
    const activeColor = activeCheckbox ? activeCheckbox.backgroundColor : newColors[Math.floor(Math.random() * 6)].backgroundColor;
    if (newItem.value !== '') {
      newItem.color = activeColor;
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItem({
        value: '',
        checked: false,
        id: '',
      })
    }
  }

  function handleCheck(id) {
    const newItems = [...items];
    const item = items.find((el) => el.id === id);
    if (item) {
      item.checked = !item.checked;
    }
    setItems( newItems);
  }

  function createItem() {
    axios.post('/items/', {
      task: currentItem.value,
      completed: currentItem.checked
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
  }

  return (
      <div>
        <div id="main">
          <div id="lg">
            <div id="header">
              <div id="logo">Todo</div>
              <input onClick={props.logout} className="logout" type="button" value="Logout"/>
            </div>
          </div>
        </div>
        <div id="container">
          <div className="page">
            <ItemsList
                handleCheck={handleCheck}
                items={items}
            />
            <InputForm
                createItem={createItem}
                handleSubmit={handleSubmit}
                inputValue={currentItem.value}
                onChange={handleChange}
                colors={colors}
                handleClickColor={handleClickColor}
            />
          </div>
        </div>
      </div>
  );
}

export default Container;
