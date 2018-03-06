import { createStore,combineReducers,applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';

const win=window;

const middlewares=[thunkMiddleware];

const storeEnhancers=compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer,{},storeEnhancers);

// import {createStore} from 'redux';
// import reducer from './reducers/index';

// const initValues={
//     'First':1,
//     'Second':10,
//     'Third':30
// };

// const store=createStore(reducer,initValues,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;