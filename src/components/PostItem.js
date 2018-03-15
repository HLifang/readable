import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { convertTime } from '../utils/helpers';

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

let fetchData = {
    method: 'DELETE',
    headers
};


class PostItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(e,id){
        fetch(`${api}/posts/`+id, fetchData).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status' + res.status);
            }
            res.json().then((data) => {
                console.log(data);
                
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        });
    }
    render(){
        const {item}=this.props;
        return (
            <li>
                <h3 className="card-list-title">
                    <Link to={{
                        pathname:`/PostDetail/${item.id}`
                    }}>{item.title}</Link>
                </h3>
                <p className="card-list-subtitle">{item.body}</p>
                <div className="sub-info">
                    <span><i className="icon-author"></i>{item.author}</span>
                    <span><i className="icon-comment"></i>{item.commentCount}</span>
                    <span><i className="icon-vote"></i>{item.voteScore}</span>
                    <span>{convertTime(item.timestamp)}</span>
                    <span className="edit">
                        <Link to={{
                            pathname: '/CreateView',
                            search: '?type=edit',
                            state: item
                        }}>edit</Link>
                    </span>
                    <span className="delete" onClick={(e)=>this.handleDelete(e,item.id)}>delete</span>
                </div>
            </li>
        );
    }
}

PostItem.propTypes={
    item:PropTypes.object.isRequired
}

export default PostItem;