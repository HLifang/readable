import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { addPost } from '../actions';
import { connect } from 'react-redux';

const api = "http://localhost:3001";

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const buttonStyle={
    'marginLeft':'80px'
};
function AddButton(props){
    return (
        <button type="submit" style={buttonStyle} className="btn btn-primary" onClick={props.onClick}>Submit</button>
    );
}

function EditButton(props){
    return (
        <button type="submit" style={buttonStyle} className="btn btn-primary" onClick={props.onClick}>Edit</button>
    );
}

class CreateViewForm extends Component{
    constructor(props){
        super(props);
        const type = props.location.search.substring(1).split('=')[1];
        
        if(type==='add'){
            this.state = {
                id: Date.now(),
                timestamp: Date.now(),
                title: '',
                body: '',
                author: '',
                category: 'React',
                type
            }
        }else{
            const {state}=props.location;
            this.state = {
                id:state.id,
                timestamp:state.timestamp,
                title:state.title,
                body:state.body,
                author:state.author,
                catesgory:state.category,
                type
            }
        }

        this.handleSubmit=this.handleSubmit.bind(this);

        console.log(this.state);
    }

    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            category:e.target.value
        });
    }

    handleInputChange=(e)=>{
        const target=e.target;
        const value=target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });
        console.log(this.state);
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const postData=this.state;

        fetch(`${api}/posts`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(postData)
        }).then((res)=>{
            if(res.status!==200){
                throw new Error('Fail to get response with status'+res.status);
            }
            res.json().then((data)=>{
                console.log(data);
                
            }).catch((error)=>{
               
            })
        }).catch((error)=>{
            
        });
    }
    handleAddSubmit=(e)=>{
        e.preventDefault();
        const postData = this.state;

        console.log('postdata',postData);

        fetch(`${api}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(postData)
        }).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status' + res.status);
            }
            res.json().then((data) => {
                console.log(data);

            }).catch((error) => {

            })
        }).catch((error) => {

        });
    }
    handleEditSubmit=(e)=>{
        e.preventDefault();
        
        const { id }=this.state;
        const {title,author,body}=this.state;

        fetch(`${api}/posts/`+id,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body:JSON.stringify({title,author,body})
        }).then((res)=>{
            if(res.status!==200){
                throw new Error('Fail to get response with status '+res.status);
            }
            res.json().then((data)=>{
                console.log(data);
            }).catch((error)=>{
                console.log(error);
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    render(){
        const categories=['React','Redux','Udacity'];
        const categoryOptions=categories.map(category=><option key={category}>{category}</option>);
        const state=this.state;
        console.log(state);

        let button=null;

        if(state.type==='add'){
            button=<AddButton onClick={this.handleAddSubmit} />;
        }else{
            button=<EditButton onClick={this.handleEditSubmit} />;
        }

        return (
            <div>
                <Link className="close-create-contact" to="/">Close</Link>
                <form>
                    <ul className="form-items">
                        <li>
                            <span>Title:</span>
                            <input className="input" value={state.title} placeholder="title" name="title" onChange={(e)=>this.handleInputChange(e)} />
                        </li>
                        <li>
                            <span>Author:</span>
                            <input className="input" value={state.author} placeholder="author" name="author" onChange={(e) => this.handleInputChange(e)}/>
                        </li>
                        <li>
                            <span>Category:</span>
                            <select className="select" defaultValue={state.category} onChange={this.handleChange}>
                                {categoryOptions}
                            </select>
                        </li>
                        <li>
                            <span>Content:</span>
                            <textarea className="textarea" value={state.body} name="body" onChange={(e) => this.handleInputChange(e)} placeholder="Please input content" />
                        </li>
                        <li>
                            {button}
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {};
}

function mapDispatchToProps(dispatch,ownProps){
    return{
        handleSubmit:()=>{
            dispatch(addPost({
                id:ownProps.id,
                timestamp:ownProps.timestamp,
                title:ownProps.title,
                body:ownProps.body,
                author:ownProps.author,
                category:ownProps.category}))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateViewForm);
