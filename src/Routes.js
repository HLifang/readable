import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import CategoryView from './components/CategoryView';
import CreateView from './components/CreateView';
import PostDetail from './components/PostDetail';

const Routes=({store})=>(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/CreateView' component={CreateView} />
                <Route path='/CategoryView' component={CategoryView} />
                <Route path='/PostDetail/:id' component={PostDetail} />
            </div>
        </Router>
    </Provider>
)

Routes.propTypes={
    store:PropTypes.object.isRequired
}

export default Routes;

