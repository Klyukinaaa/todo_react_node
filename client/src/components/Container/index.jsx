import React, {useState, useEffect} from 'react';
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
    id: '',
    task: '',
    completed: false,
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

  function removeClick() {
    setColors([
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
    ])
  }

  function handleChange(event) {
    const newColors = [...colors];
    const activeCheckbox = newColors.find((item) => item.selected);
    const activeColor = activeCheckbox ? activeCheckbox.backgroundColor : newColors[Math.floor(Math.random() * 6)].backgroundColor;
    setCurrentItem({
      task: event.target.value,
      completed: false,
      id: Date.now(),
      color: activeColor
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // отменим стандартное поведение браузера
    if (currentItem.task !== '') {
      const newItems = [...items, currentItem];
      setItems(newItems);
      setCurrentItem({
        task: '',
        completed: false,
        id: '',
        color: ''
      })
    }
  }

  function handleCheck(id) {
    const newItems = [...items];
    const item = items.find((el) => el.id === id);
    if (item) {
      item.completed = !item.completed;
    }
    setItems(newItems);
  }

  function createItem() {
    axios.post('/items/', {
      task: currentItem.task,
      completed: currentItem.completed,
      color: currentItem.color
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

  useEffect(() => {
    axios.get('/items/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then(res =>
            setItems(res.data),
        )
        .catch(err => {
          console.log(err);
        });
  }, [items.length])

  function deleteItem(id) {
    axios.delete(`/items/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
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
                deleteItem={deleteItem}
                handleCheck={handleCheck}
                items={items}
            />
            <InputForm
                createItem={createItem}
                handleSubmit={handleSubmit}
                inputValue={currentItem.task}
                onChange={handleChange}
                colors={colors}
                handleClickColor={handleClickColor}
            />
            <div onClick={removeClick} className="remove">
            </div>
          </div>
        </div>
      </div>
  );
}

export default Container;
