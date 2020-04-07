// import react & react-dom
// html - <script src="./js"> </script>

// es2015 module loader - react angular
// common js module loader - node + express 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' // npm install react-redux
import configureStore from './store/configureStore'
import { startGetUsers } from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'
import { startGetComments } from './actions/commentsAction'

// import { increment, decrement } from './actions/countAction'
const store = configureStore() 
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch(increment())
// store.dispatch(increment())

// handle page reloads 
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )