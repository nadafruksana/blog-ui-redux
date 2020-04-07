import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetComments } from './actions/commentsAction'
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            comments:[],
            posts:[]
        }
    }
    componentDidMount(){
        if(this.props.comments.length === 0){
            this.props.dispatch(startGetComments())
        }
    }  

        render(){
            const post=this.props.userPosts
            const user= this.props.users.filter(user=> user.id == post.userId)
            const userComments= this.props.comments.filter(comment => comment.postId== post.id)
        return(
            <div>
                <h2>USER NAME- {user.name}</h2>
                <h3>TITLE: {post.title}</h3>
                <h4>BODY: <br/> {post.body}</h4>
                <hr/>
                <h5> COMMENTS </h5>
                <ul> 
                    {userComments.map((comment)=>{
                        return <li key={comment.id}> {comment.body}</li>
                    })}
                </ul>
                <hr/>

                <h5><Link to={`/users/${user.id}`}>More posts of author-{user.name}</Link></h5>
                 
             </div>
        )
    }
}

const mapStateToProps=(state, props)=>{
    return {
        userPosts: state.posts.find(post => post.id == props.match.params.id),
        comments : state.comments,
        users : state.users
    }
}
export default connect(mapStateToProps)(PostShow)