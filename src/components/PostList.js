import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

function PostList(props){
        const {lists}=props;

        if(lists.length===0){
            return <div>no data.</div>
        }
        return ( 
            <ul className="card-lists">
                {lists.map(list=>(
                    <PostItem key={list.id} item={list} />
                ))}
            </ul>
        )
}

PostList.propTypes={
    lists:PropTypes.array.isRequired
}

export default PostList;