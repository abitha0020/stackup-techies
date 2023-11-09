import axios from 'axios'
const baseUrl = "http://localhost:5000"
const getAllTodo =(setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDo(data)
    })
}
export {getAllTodo}