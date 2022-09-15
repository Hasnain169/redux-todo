export const addTodo = (data) => {
    return{
        type: 'ADD_TODO',

        payload: {
            
            data:data
        }
    }
}

export const deleteTodo = (id) => {
    return{
        type: 'DELETE_TODO',
        id:id
    }
}

export const editTodo=(data,id)=>async dispatch =>{
    dispatch({
        type: 'EDIT_TODO',
        payload:{
            data:data,
            indx:id
        }
    })
}

