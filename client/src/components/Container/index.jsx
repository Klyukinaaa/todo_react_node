import React, {useState, useEffect} from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import ItemsService from "../../services/ItemsService";

function Container() {
  const itemsService = new ItemsService();

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
    task: '',
    completed: false,
    color: '',
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function requestItems() {
      try {
        const items = await itemsService.getItems();
        setItems(items)
      } catch (e) {
        console.log(e)
      }
    }
    requestItems();
  }, [])


  async function createItem() {
    try {
      const item = {
        ...currentItem,
        color: getItemsColor()
      }
      const data = await itemsService.createItem(item);
      setItems([...items, data]);
    } catch (e) {
      console.log(e)
    }
  }

  async function handleCheck(id) {
    try {
      const item = items.find((el) => el.id === id);
      if (item) {
        item.completed = !item.completed
      }
      await itemsService.patchItem(id, item);
      setItems([...items]);
    } catch (e) {
      console.log(e)
    }
  }

  async function handleText(id, event) {
    try {
      const item = items.find((el) => el.id === id);
      if (item) {
        item.task = event.target.value
      }
      await itemsService.patchItem(id, item)
      setItems([...items])
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteItem(id) {
    try {
      await itemsService.deleteItem(id);
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
    } catch (e) {
      console.log(e);
    }
  }

  function handleClickColor(i) {
    const newColors = [...colors];
    setColors(newColors.map((item, index) => {
          const newItem = item;
          if (i === index) {
            newItem.selected = !newItem.selected
          } else newItem.selected = i === index
          return newItem;
        }
        )
    );
  }

  function handleTextInputChange(event) {
    setCurrentItem({
      task: event.target.value,
      completed: false,
      color: currentItem.color
    });
  }

  function getItemsColor() {
    const activeCheckbox = colors.find((item) => item.selected);
    return activeCheckbox ? activeCheckbox.backgroundColor : colors[Math.floor(Math.random() * 6)].backgroundColor;
  }


  async function handleSubmit(event) {
    event.preventDefault(); // отменим стандартное поведение браузера
    if (currentItem.task !== '') {
      try {
        await createItem()
        setCurrentItem({
          task: '',
          completed: false,
          id: '',
          color: ''
        })
      } catch (e) {

      }
    }
  }

  return (
      <div>
        <div id="container">
          <div className="page">
            <ItemsList
                deleteItem={deleteItem}
                handleCheck={handleCheck}
                items={items}
                handleText={handleText}
            />
            <InputForm
                createItem={createItem}
                handleSubmit={handleSubmit}
                inputValue={currentItem.task}
                onChange={handleTextInputChange}
                colors={colors}
                handleClickColor={handleClickColor}
            />
          </div>
        </div>
      </div>
  );
}

export default Container;
