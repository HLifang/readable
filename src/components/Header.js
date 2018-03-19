import React from 'react';
import TabMenu from './TabMenu';

const style={
    float:'left'
};

const NavBar = () => (
    <ul className='nav-menu'>
        <TabMenu filter="SHOW_ALL">All</TabMenu>
        <TabMenu filter="SHOW_REDUX">Active</TabMenu>
        <TabMenu filter="SHOW_REACT">Completed</TabMenu>
        <TabMenu filter="SHOW_UDACITY">Completed</TabMenu>
    </ul>
);

function Header(){
    return (
        <header className='header clearfix'>
            <h1 style={style}>Readable</h1>
            <NavBar />
        </header>
    )
}

export default Header;