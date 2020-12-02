import React from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import axios from "axios";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      colors: [
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
      ],
      currentItem: {
        value: '',
        checked: false,
        id: '',
        color: '',
      },
    };
    this.createItem = this.createItem.bind(this);
    this.handleChange = this.handleChange.bind(this); // создает новую функцию, с новым контекстом
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClickColor = this.handleClickColor.bind(this);
  }

  handleClickColor(i) {
    const {colors} = this.state;
    const newColors = [...colors];
    this.setState({
      colors: newColors.map((item, index) => {
        const newItem = item;
        newItem.selected = i === index;
        return newItem;
      }),
    });
  }

  handleChange(event) {
    this.setState({
      currentItem: {
        value: event.target.value,
        checked: false,
        id: Date.now(),
      },
    });
  }

  handleSubmit(event) {
    const {currentItem, items, colors} = this.state;
    event.preventDefault(); // отменим стандартное поведение браузера
    const newItem = currentItem;
    const newColors = [...colors];
    const activeCheckbox = newColors.find((item) => item.selected);
    const activeColor = activeCheckbox ? activeCheckbox.backgroundColor : newColors[Math.floor(Math.random() * 6)].backgroundColor;
    if (newItem.value !== '') {
      newItem.color = activeColor;
      const newItems = [...items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          value: '',
          checked: false,
          id: '',
        },
      });
    }
  }

  handleCheck(id) {
    const {items} = this.state;
    const newItems = [...items];
    const item = items.find((el) => el.id === id);
    if (item) {
      item.checked = !item.checked;
    }
    this.setState({
      items: newItems,
    });
  }

  createItem() {
    axios.post('/items/', {
      task: this.state.currentItem.value,
      completed: this.state.currentItem.checked
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

  render() {
    const {currentItem, items, colors} = this.state;
    return (
        <div>
          <div id="main">
            <div id="lg">
              <div id="header">
                <div id="logo">Todo</div>
                <input onClick={this.props.logout} className="logout" type="button" value="Logout"/>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="page">
              <ItemsList
                  handleCheck={this.handleCheck}
                  items={items}
              />
              <InputForm
                  createItem={this.createItem}
                  handleSubmit={this.handleSubmit}
                  inputValue={currentItem.value}
                  onChange={this.handleChange}
                  colors={colors}
                  handleClickColor={this.handleClickColor}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default Container;
