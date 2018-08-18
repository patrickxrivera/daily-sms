import React, { Component } from 'react';
import axios from 'axios';

const logError = (err) => {
  console.log(err.response.data.message);
};

class App extends Component {
  componentDidMount() {
    this.sendTestRequest();
  }

  sendTestRequest = async () => {
    const data = {
      text: 'test',
      send_time: '8:00 AM PST',
      frequency: ['Monday', 'Tuesday', 'Wednesday'],
      active: true
    };

    let res;

    try {
      res = await axios.get('http://localhost:5000/api/messages/23');
    } catch (err) {
      return logError(err);
    }

    console.log(res);
  };

  render() {
    return <div>Hello</div>;
  }
}

export default App;
