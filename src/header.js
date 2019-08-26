import React, {Component} from 'react';
import {NavBar, Icon, Button} from 'antd-mobile';

const NavBarInstance = () => {
    return(
        <div>
          <NavBar
            mode="dark"
            icon={<Icon type="left" onClick={()=>console.log("aa")}/>}
            onLeftClick={() => console.log("좌측클릭")}
            rightContent = {[
              <Icon key="0" type="search" style={{marginRight: '16px'}} />,
              <Icon key="1" type="ellipsis"/>
            ]}
            >
              셔틀N
          </NavBar>
        </div>
    );
}

class customHeader extends Component {
    render() {
        return (
            <div>
                <NavBarInstance/>

            </div>
        )
    }
}


export default customHeader;