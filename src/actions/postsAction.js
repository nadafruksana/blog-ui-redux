import axios from 'axios'
// sync
export const setPosts = (posts) => {
    return { type: 'SET_POSTS', payload: posts}
}

// async 
export const startGetPosts = () => {
    return (dispatch) => {
       // const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                // console.log(response.data)
                const posts = response.data 
                dispatch(setPosts(posts))
            })
    }
}