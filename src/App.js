import React, { Component } from 'react';
import {Card, Layout, Drawer, Button, Icon, Steps, Row, Col} from 'antd';
import './App.css';
const {Header, Footer, Content} = Layout;
const {Step} = Steps;

class App extends Component {

  state = {
  }

  componentDidMount() {
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
      return (
        <div style={{ background: '#ECECEC', padding: '30px'}}>
          <Card title={bus_arr.bus_number} bordered={false} style={{ width: 700 }}>
            <Row>
              <Col span={6} push={1}>
              <p>{bus_arr.name} </p>
              <p>{bus_arr.is_operating}</p>
              <p>{bus_arr.lat}</p>
              <p>{bus_arr.lng}</p>
              </Col>
              <Col span={4} push={4}>
                <Steps progressDot direction="vertical" current={1}>
                  <Step title="외대사거리" />
                  <Step title="모현지석묘" />
                  <Step title="외대기숙사"/>
                  <Step title="외대도서관"/>
                  <Step title="학생회관"/>
                </Steps>
              </Col>
            </Row>
           
          </Card>
        </div>        
        
        )
    })

    return bus
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
          {bus ? this._renderBusData() : <Icon type="sync" spin/>}
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
          )
  }

}


export default App;