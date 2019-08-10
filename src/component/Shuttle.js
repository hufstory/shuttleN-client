import React from 'react';
import {Timeline, Popover} from 'rsuite';
//import {BrowserView, MobileView} from 'react-device-detect';
import '../App.css'

const BusCard = ({data, key}) => {
    console.log(data)
    const bus = data.map((bus_arr) => {
      return (
        <div style={{ height: 100, background: 'white'}} key={bus_arr.bus_number}>
        <Popover title={bus_arr.bus_number} visible style={{width:200, padding:20}}>
        <Timeline>
                  <Timeline.Item>aa</Timeline.Item>
                  <Timeline.Item>aa</Timeline.Item>
                  <Timeline.Item>aa</Timeline.Item>
                  <Timeline.Item>aa</Timeline.Item>
                  <Timeline.Item>aa</Timeline.Item>
                  <Timeline.Item>aa</Timeline.Item>
                </Timeline>
        </Popover>
        </div>
      )
    })
  
  return bus
}

export default BusCard;