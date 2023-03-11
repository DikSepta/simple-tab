import {Button, TextField} from '@mui/material'
import { useState } from 'react';

const TabOne = ({onSubmitNumber}) => {
    const [number, setNumber] = useState(0);
    const onSubmit = (event) => {
        event.preventDefault();
        onSubmitNumber(number);
    }
    const onChange = (event) => {
        setNumber(Number(event.target.value));
    }

    return(
        <form onSubmit={onSubmit}>
            <TextField onChange={onChange} label="Input a number" variant="outlined" />
            <Button variant='contained' type='submit' sx={{display: 'block', mt: 2}}>Submit</Button>
        </form>
    )
}

export default TabOne;