export const GET_ALL_CATEGORY ='GET_ALL_CATEGORY';
export const GET_POSTS_FOR_ONE_CATEGORY ='GET_POSTS_FOR_A_CATEGORY';
export const GET_ALL_POSTS ='GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_DETAILS_OF_POST ='GET_DETAILS_OF_POST';
export const VOTING_ON_POST = 'VOTING_ON_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_ALL_COMMENTS_FOR_A_POST ='GET_ALL_COMMENTS_FOR_A_POST';
export const ADD_COMMENT ='ADD_COMMENT';
export const GET_COMMENT_DETAIL ='GET_COMMENT_DETAIL';
export const VOTING_ON_COMMENT ='VOTING_ON_COMMENT';
export const EDIT_COMMENT ='EDIT_COMMENT';
export const DELETE_COMMENT ='DELETE_COMMENT';

export const setActiveFilter=(filter)=>({
    type:'SET_ACTIVE_FILTER',
    filter
})

export const VisibilityFilter={
    SHOW_ALL:'SHOW_ALL',
    SHOW_REDUX:'SHOW_REDUX',
    SHOW_REACT:'SHOW_REACT',
    SHOW_UDACITY:'SHOW_UDACITY'
}

export const getAllCategory=(results)=>({
    type:GET_ALL_CATEGORY,
    results
})

export const getPostsForParticularCategory=(category)=>({
    type: GET_POSTS_FOR_ONE_CATEGORY,
    category
})

export const getAllPosts=()=>({
    type: GET_ALL_POSTS
})

export const addPost=({ id,timestamp,title,body,author,category})=>({
    type:ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
})

export const getPostDetail=(id)=>({
    type: GET_DETAILS_OF_POST,
    id
})

export const votingOnPost=(option)=>({
    type: VOTING_ON_POST,
    option
})

export const editPost=(id,title,body)=>({
    type: EDIT_POST,
    id,
    title,
    body
})

export const deletePost=(id)=>({
    type:DELETE_POST,
    id
})

export const getAllComments=(id)=>({
    type:GET_ALL_COMMENTS_FOR_A_POST,
    id
})

export const addComment=({id,timestamp,body,author,parentId})=>({
    type:ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
})

export const getCommentDetail=(id)=>({
    type:GET_COMMENT_DETAIL,
    id
})

export const votingOnComment=(id,option)=>({
    type: VOTING_ON_COMMENT,
    id,
    option
})

export const editComment=(id,timestamp,body)=>({
    type:EDIT_COMMENT,
    id,
    timestamp,
    body
})

export const deleteComment=(id)=>({
    type:DELETE_COMMENT,
    id
})


const apiUrl = 'http://localhost:3001';
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers={
    'Accept': 'application/json',
    'Authorization': token
};

export const fetchAllPosts=()=>{
    return (dispatch)=>{
        let fetchData = {
            method: 'GET',
            headers
        };

        fetch(`${apiUrl}/posts`, fetchData).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status' + res.status);
            }
            res.json().then((responseJson) => {
                dispatch(getAllCategory(responseJson));
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        });

    }
}

export const deletePostAction=(id)=>{
    return (dispatch)=>{
        let fetchData = {
            method: 'DELETE',
            headers
        };
        fetch(`${apiUrl}/posts/` + id, fetchData).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status' + res.status);
            }
            res.json().then((data) => {
                console.log(data);
                dispatch(deletePost(id));
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}

