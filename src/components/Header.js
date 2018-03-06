import React from 'react';
import TabMenu from './TabMenu';

const style={
    float:'left'
};
function Header(){
    return (
        <header className='header clearfix'>
            <h1 style={style}>Readable</h1>
            <TabMenu />
        </header>
    )
}

export default Header;