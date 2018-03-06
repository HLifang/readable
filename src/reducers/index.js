import { ADD_POST, DELETE_POST, GET_ALL_CATEGORY} from '../actions';

function reducer(state,action){
    switch(action.type){
        case GET_ALL_CATEGORY:
            return [...state,...action.results];
        case ADD_POST: 
            return {...state,type:'add'};
        case DELETE_POST:
            return {...state,type:'delete'};
        default:
            return state;
    }
}

export default reducer;