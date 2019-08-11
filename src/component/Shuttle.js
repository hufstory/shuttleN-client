import React from 'react';
import {Col, Icon, Timeline} from 'rsuite';
//import {BrowserView, MobileView} from 'react-device-detect';
import '../App.css'
import './Shuttle.css'
import { padding } from 'polished';

const BusCard = ({data, key}) => {
    console.log(data)
    const bus = data.map((bus_arr) => {
      
      return (

        <Col xs={12} sm={12} md={24} lg={24} className="BusFull">
        <Timeline className="BusCard">
        <p>제목</p>
        <Timeline.Item dot={<Icon icon="bus"/>} className="Bus__Column">
            <p>인문경상관</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>어문학관</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>학생회관</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>공학관</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>백년관</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>정심대도</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>지석묘</p>
          </Timeline.Item>
          <Timeline.Item className="Bus__Column">
            <p>모현사거리</p>
          </Timeline.Item>
        </Timeline>
        <padding></padding>
        </Col>
                  
      )
    });
  
  return bus
}

export default BusCard;