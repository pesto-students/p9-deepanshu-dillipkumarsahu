import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = useNavigate();
    return (
        <Box
            height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Typography variant="h4">Redux Assignment</Typography>
            <Stack mt={2} direction='row' spacing={2}>
                <Button variant='contained' onClick={() => navigate('/exercise1')}>Exercise 1</Button>
                <Button variant='contained' onClick={() => navigate('/exercise2')}>Exercise 2</Button>
            </Stack>
        </Box>
    )
}
export default Homepage;