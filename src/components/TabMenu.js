import React,{ Component } from 'react';
import { setActiveFilter } from '../actions';
import { connect } from 'react-redux';

// class TabMenu extends Component{
//     render(){
//         return (
//             <ul className='nav-menu'>
//                 <li className="on">All</li>
//                 <li>React</li>
//                 <li>Redux</li>
//                 <li>Udacity</li>
//             </ul>
//         )
//     }
// }


const TabMenu=({active,children,onClick})=>{
    if(active){
        return <li className="on">{children}</li>
    }
    return (
        <li onClick={e=>{
            e.preventDefault();
            onClick();
        }}>{children}</li>
    )
}

const mapStateToTabMenuProps=(state,ownProps)=>{
    return {
        active:ownProps.filter===state.activeFilter
    };
}

const mapDispatchToTabMenuProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(
                setActiveFilter(ownProps.filter)
            );
        }
    };
}

export default connect(mapStateToTabMenuProps,mapDispatchToTabMenuProps)(TabMenu);