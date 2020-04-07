import React from 'react'
import { connect } from 'react-redux'
//import {startGetUsers} from './actions/usersAction'
class CommentShow extends React.Component {
    
    render() {
        return (
            <div>
                {
                    this.props.comment ? ( <div> 
                        <h2>Comments - {this.props.match.params.id}</h2>
                        <p> {this.props.comment.body} </p> 
                    </div> ) : (
                        <p> loading....</p>
                            //{this.props.dispatch(startGetUsers())}
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        comment: state.comments.find(comment => comment.id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(CommentShow)

