import axios from 'axios';

class ItemsService {
  static createItem(item) {
    return axios.post('/items/', {
      task: item.task,
      completed: item.completed,
      color: item.color,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  static patchItem(id, item) {
    return axios.patch(`/items/${id}`, {
      task: item.task,
      completed: item.completed,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteItem(id) {
    return axios.delete(`/items/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  static getItems() {
    return axios.get('/items/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }
}

export default ItemsService;
