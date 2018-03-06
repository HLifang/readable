import React,{ Component} from 'react';

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

let fetchData = {
    method: 'GET',
    headers
};
class PostDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            post:null
        }
    }
    componentDidMount(){
        const {id}=this.state;
        fetch(`${api}/posts/`+id,fetchData).then((res)=>{
            if(res.status!==200){
                throw new Error('Fail to get response with status'+res.status);
            }
            res.json().then((data)=>{
                console.log(data);
                this.setState({post:data});
            }).catch((error)=>{
                console.log(error);
            })
        }).catch((error)=>{
            console.log(error);
        });
    }
    render(){
        const {post}=this.state;
        if(!post){
            return (<div>no data</div>);
        }
        return (
            <div>{post.body}</div>
        )
    }
}

export default PostDetail;