import React,{ Component } from 'react';

class TabMenu extends Component{
    render(){
        return (
            <ul className='nav-menu'>
                <li>按投票排序</li>
                <li>按时间排序</li>
            </ul>
        )
    }
}

export default TabMenu;