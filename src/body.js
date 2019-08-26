import React from 'react';
import {Tabs, WhiteSpace, Badge, Flex} from 'antd-mobile';
import {Loader} from 'rsuite';
import BusCard from './component/Shuttle';

import "./body.css"

const tabs = [
    {title: <Badge text={'N'}>전체 보기</Badge>},
    {title: <Badge>상행</Badge>},
    {title: <Badge>하행</Badge>}
]



const TabMenu = (data) => {
    console.log(data.info_data)
    return(
    <div>
        <Tabs tabs={tabs}
            initialPage={1}
            onChange = {(tab, index) => {}}
            onTabClick = {(tab,index) => {}}
        >
            <div className="Content">
                전체 내용
                <Flex align="between" alignContent="center">
                {data.info_data ? <BusCard data={data.info_data}/> :  <Loader size="lg" content="으쌰으쌰 불러오고 있어요" /> }
                </Flex>
            </div>

            <div className="Content" >
                상행 내용
                <Flex align="between" alignContent="center">
                {data.info_data ? <BusCard data={data.info_data}/> :  <Loader size="lg" content="으쌰으쌰 불러오고 있어요" /> }
                </Flex>
            </div>

            <div className="Content" >
                하행 내용
                <Flex align="between" alignContent="center">
                {data.info_data ? <BusCard data={data.info_data}/> :  <Loader size="lg" content="으쌰으쌰 불러오고 있어요" /> }
                </Flex>
            </div>
        </Tabs>
        <WhiteSpace/>
    </div>)
}

export default TabMenu;