import { Typography, Box } from "@mui/material";

const TabThree = ({number}) => {
    return (
        <Box>

        <Typography variant='h6' sx={{display: 'inline-block'}}>
            Biggest positive integer less than generated number  :
        </Typography>
        <Typography variant='h5' sx={{display: 'inline-block', border: '1px solid #000e6b', padding: '0.5rem 1rem', ml: '1rem'}}>
            {number ? number : 'No positif integer found'}
        </Typography>
        </Box>
    )
}

export default TabThree;