import React from 'react';
import {Card, Steps, Row, Col} from 'antd';
import '../App.css'
const {Step} = Steps;

const BusCard = ({busData}) => {
    console.log(busData)
    const bus = busData.buses.map((bus_arr) => {
      console.log(bus_arr)
      return (
        <div style={{ background: '#ECECEC', padding: '30px'}}>
          <center>
          <Card title={bus_arr.bus_number} bordered={false} style={{ width: 700}}>
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
          </center>
        </div>        
        
        )
    })
  
  return bus
}

export default BusCard;