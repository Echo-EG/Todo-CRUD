import {Checkbox, Box} from '@material-ui/core';
import { Button } from '@material-ui/core';

export const TodoItem = (props) => {
    const {label, isSelected, deleteAction,index} = props
    return (
        <Box>
            <Checkbox checked={isSelected}/>
            <span>{label}</span>
            <Button onClick={()=> {deleteAction(index)}} variant="contained">Delete</Button>
        </Box>
    )
}