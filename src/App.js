import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';

import CustomHeader from './header';
import TabMenu from './body';
import './App.css';
import { formatTestResults } from '@jest/test-result';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      }
  }

  componentDidMount() {
    console.log("DId Mount")
    this._getBusLoc();
  }

  _getBusLoc = async () => {
    const buses = await this._callApi()
    this.setState({
      buses
    })
    return buses;
  }
  
  _callApi = () => {
    return fetch("/getBusLoc")
      .then((response) => response.json())
      .then(json => json.bus_array)
      .catch((err) => console.log(err))
  }

  showMenu = () => {
    this.setState({
      show: true
    });
  }

  onClose = () => {
    this.setState({
      show: false
    });
  }

  render() {
    const buses = this.state.buses

    return(
      <div>
          <CustomHeader/>


      <body>
        <TabMenu info_data={buses}/>
      </body>
      <footer>
        
      </footer>
      </div>
    )
  }
}

export default App;