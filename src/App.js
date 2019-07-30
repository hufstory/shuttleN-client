import React, { Component } from 'react';
import {Layout, Drawer, Button, Icon} from 'antd';
import BusCard from './component/Shuttle';
import './App.css';
const {Header, Footer, Content} = Layout;

class App extends Component {

  state = {
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
      visible: true
    });
  }

  onClose = () => {
    this.setState({
      visible: false
    });
  }

  

  render() {
    const bus = this.state.buses

    return (
        <Layout>
          <Header>
            <Button type="primary" onClick={this.showMenu}>더보기</Button>
          </Header>
          <Drawer title = "더보기" placement="left" closable = {false}
            onClose = {this.onClose}
            visible = {this.state.visible}>
              <p>셔틀1</p>
              <p>셔틀2</p>
              <p>셔틀3</p>
          </Drawer>

          <Content>
            {bus ? <BusCard busData={this.state}/> : <Icon type="sync" spin/>}
          </Content>
          
          <Footer>
            Footer
          </Footer>
        </Layout>
          )
  }

}

export default App;