import axios from 'axios'
// sync
export const setUsers = (users) => {
    return { type: 'SET_USERS', payload: users}
}

// async 
export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                // console.log(response.data)
                const users = response.data 
                dispatch(setUsers(users))
            })
    }
}