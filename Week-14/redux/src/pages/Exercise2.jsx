import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { incrementCounterReduxServices, decrementCounterReduxServices, resetCounterReduxServices } from "../app/redux/slices/setpCounter";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Exercise2 = () => {
    const { count } = useSelector(state => state.stepCounterReducer);
    const dispatch = useDispatch();

    return (
        <Box height='100vh' display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'}>
            <Typography variant="h1">{count}</Typography>
            <Stack direction={'row'} spacing={4} my={2} border='3px solid #000' borderRadius={10}> 
                <IconButton size='large' onClick={() => dispatch(incrementCounterReduxServices())}>
                    <AddIcon />
                </IconButton>
                <IconButton size='large' onClick={() => dispatch(decrementCounterReduxServices())}>
                    <RemoveIcon />
                </IconButton>
            </Stack>
            <Button variant='contained' color='error' onClick={() => dispatch(resetCounterReduxServices())}>
                reset
            </Button>
        </Box>
    )
}
export default Exercise2;