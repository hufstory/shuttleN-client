import React, {Component} from 'react';
import './App.css';

class App extends Component{
  
  state = {
  }

  componentDidMount(){
    console.log("DId Mount")
    this._getBusLoc()
  }

  _getBusLoc = async () => {
    const buses = await this._callApi()
    console.log(buses)
    this.setState({
      buses
    })
  }

  _callApi = () => {
    return fetch("/getBusLoc")
    .then((response) => response.json())
    .then(json => json.bus_array)
    .catch((err) => console.log(err))
  }
  //API 접근

  _renderBusData = () => {
    console.log(this.state)
    const bus = this.state.buses.map((bus_arr) => {
      console.log(bus_arr)
      return (<div><div>{bus_arr.bus_number}</div>
        <div>{bus_arr.name}</div>
        <div>{bus_arr.is_operating}</div>
        <br></br>
        </div>)
    })

    return bus
  }

  render() {
    const bus = this.state.buses

    return(
      <div>
        {bus ? this._renderBusData() : "로딩중..."}
      </div>
    )
  }

}

export default App;