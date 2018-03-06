import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostList from './PostList';
import Header from './Header';
import { fetchAllPosts } from '../actions';

class Home extends Component{
    componentDidMount(){
        this.props.onFetchList();
    }
    render(){
        const {lists}=this.props;
        return (
            <div>
                <Header />
                {lists.length!==0 && (
                    <PostList lists={lists}/>
                )}
                <div className="add-post">
                    <Link to="/CreateView?type=add">+</Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {
        lists:[...state]
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onFetchList:()=>{
            dispatch(fetchAllPosts());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);