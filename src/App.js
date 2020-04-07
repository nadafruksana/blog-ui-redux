import React from 'react'
//import Home from './Home'
import UsersList from './UsersList'
import Posts from './Posts'
import UserShow from './UserShow'

import PostShow from './PostShow'
import Comment from './Comment'
import CommentShow from './CommentShow'


import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
    <div>
            <Link to="/users">|Users</Link>
            <Link to="/posts">|Posts</Link>
            <Link to="/comments">|Comment</Link>
        
            
            
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow} exact={true}/>
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/posts/:id" component={PostShow}/>
            <Route path="/comments" component={Comment}/>
            <Route path="/comments/:id" component={CommentShow}/>

    </div>
        </BrowserRouter>
    )
}
export default App


