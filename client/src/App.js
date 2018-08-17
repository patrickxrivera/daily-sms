import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    this.sendTestRequest();
  }

  sendTestRequest = async () => {
    const data = {
      text: 'test',
      send_time: '8:00 AM PST',
      frequency: ['Monday', 'Tuesday', 'Wednesday']
    };

    const res = await axios.post('http://localhost:5000/api/message/1', data);

    // const res = await axios.get('http://localhost:5000/api/messages/1');

    console.log(res.data);
  };

  render() {
    return <div>Hello</div>;
  }
}

export default App;
