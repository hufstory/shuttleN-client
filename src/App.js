import React, { Component } from 'react';
import 'rsuite/dist/styles/rsuite.min.css';
import {Container, Header, Content, Footer, Loader, Grid, Row} from 'rsuite';

import CustomHeader from './header';
import BusCard from './component/Shuttle';
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
      <Container>
        <Header>
          <CustomHeader/>
        </Header>

        <Content>
        <Grid fluid style={{alignContent:'center'}}>
          <Row className="show-grid">
          {buses ? <BusCard data={buses}/> :  <Loader size="lg" content="으쌰으쌰 불러오고 있어요" /> }
          </Row>
        </Grid>
        </Content>
        
        <Footer>

        </Footer>
      </Container>
    )
  }
}

export default App;