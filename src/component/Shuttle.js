import React from 'react';
import {Timeline, Popover, Col} from 'rsuite';
//import {BrowserView, MobileView} from 'react-device-detect';
import '../App.css'
import { padding } from 'polished';

const BusCard = ({data, key}) => {
    console.log(data)
    const bus = data.map((bus_arr) => {
      return (

        <Col xs={6} md={12} sm={24} xs={12} style={{height:350, width:180}}>
        <Popover key={bus_arr.bus_number}title={bus_arr.bus_number} visible style={{width:180}}>
        <Timeline>
                  <Timeline.Item>외대사거리</Timeline.Item>
                  <Timeline.Item>모현지석묘</Timeline.Item>
                  <Timeline.Item>외대기숙사</Timeline.Item>
                  <Timeline.Item>도서관</Timeline.Item>
                  <Timeline.Item>학생회관</Timeline.Item>
                  <Timeline.Item>어문관</Timeline.Item>
                  <Timeline.Item>경상관</Timeline.Item>
                </Timeline>
        </Popover>
        </Col>
                  
      )
    })
  
  return bus
}

export default BusCard;