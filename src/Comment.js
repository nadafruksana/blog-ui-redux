import React from 'react'
import axios from 'axios'
import { startGetComments } from './actions/commentsAction'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

 class Comment extends React.Component{
   
    componentDidMount(){
        
        if (this.props.comments.length === 0) {
            this.props.dispatch(startGetComments())
        }
    }
    render() {
        console.log('render') 
        return (
            <div> 
        
                 <ul>{this.props.comments.map((comment)=>{
                        return <li key={comment.id}><Link to={`/comments/${comment.id}`}>
                        {comment.body}</Link></li>
                    })}
                    </ul>
                
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(Comment)

