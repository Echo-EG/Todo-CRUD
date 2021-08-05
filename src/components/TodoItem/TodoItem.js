import {Checkbox, Box} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../redux/slice';
import { deleteTodo } from "../../redux/slice";

export const TodoItem = (props) => {

    const{id, title, completed} = props

    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({id: id, completed: !completed})
        );
    } ;

    const handleDeleteClick = () => {
        dispatch(deleteTodo({id: id}))
    }

    // const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos);

    

    // const addTask = (event) =>{
    //     event.preventDefault(); 
    //     dispatch(
    //         saveTodo({
    //             title:title,
    //         })
    //     );
    // };



    
    return (
        <Box>
            <Checkbox checked={completed} onChange= {handleCompleteClick} />
            <span>{title}</span>
            <Button 
           onClick={handleDeleteClick}  variant="contained">Delete</Button>
        </Box>
    );
}


export default TodoItem;