import axios from "axios";

class ItemsService {

  createItem(item) {
  return axios.post('/items/', {
      task: item.task,
      completed: item.completed,
      color: item.color
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
  }

  patchItem(id, item) {
    return axios.patch(`/items/${id}`, {
      task: item.task,
      completed: item.completed,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
  }

  deleteItem(id) {
    return axios.delete(`/items/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
  }

  getItems() {
    return axios.get('/items/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
  }
}

export default ItemsService;
