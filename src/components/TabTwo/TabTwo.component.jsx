import { Box, Button, Typography } from "@mui/material";

const TabTwo = ({array, generate}) => {
    return (
        <Box sx={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
            <Button sx={{width:'fit-content'}} onClick={()=>generate()} variant='contained'>Generate</Button>
            <Typography variant='h6'>List of generated number</Typography>
            <table style={{borderCollapse: 'collapse', width: '200px'}}>
                <tbody>
                    {array.map((num, idx) => (<tr key={idx}><td style={{border: '1px solid #000e6b', padding: '0.5rem'}}>{num}</td></tr>))}
                </tbody>
            </table>            
        </Box>
    )
}

export default TabTwo;