import React, { Component } from 'react';
import { NavBar, Icon, Popover, TabBar } from 'antd-mobile';
import {FaLightbulb} from 'react-icons/fa';
import "./header.css"

class customHeader extends Component {

  state = {
    visible: false,
    theme: 0
  }

  handleChange = (e) => {
    this.setState({
      visible: e.target
    })
  }

  onSelect = (opt) => {
    console.log(opt.key)
    this.setState({
      filter: opt.key,
      visible: false
    })
  }

  modeChange = (e) => {
    // 1: dark
    // 0: white
    this.setState({
      theme: !(this.state.theme)
    })
  }

  componentWillUpdate() {
    this.render()
  }

  render() {
    return (
      <div>
        <NavBar
          mode={(this.state.theme==1) ? "dark" : "light"}
          leftContent={
            <Popover mask
              placement="bottomLeft"
              overlayClassName="forest"
              visible={this.state.visible}
              overlay={[
                (<Popover.Item key="4" value="all">전체 보기</Popover.Item>),
                (<Popover.Item key="5" value="up">상행 전용</Popover.Item>),
                (<Popover.Item key="6" value="down">하행 전용</Popover.Item>)
              ]}
              align={{
                overflow: {adjustY:0, adjustX:0},
                offset: [-10,0]
              }}
              onVisibleChange={this.handleChange}
              onSelect={this.onSelect}
            >
              <div>
                <Icon key="1" type="ellipsis" className="icon" />
              </div>
            </Popover>
  
          }
          rightContent={
            <FaLightbulb onClick={this.modeChange}/>
          }
        >
          셔틀N
            </NavBar>
      </div>
    );
  }
}


export default customHeader;