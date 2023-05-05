import { Box, ToggleButton } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from "react-redux"
import { setLightReduxServices } from "../app/redux/slices/light";

const Exercise1 = () => {
    const { light } = useSelector(state => state.lightReducer);
    const dispatch = useDispatch();

    return (
        <Box bgcolor={light ? "#000" : "#fff"} height='100vh' display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <ToggleButton
                color='secondary'
                size='large'
                sx={{ border: `1px solid ${light ? `#19857B` : `#707070`}` }}
                value="check"
                selected={light}
                onChange={() => dispatch(setLightReduxServices(!light))}
            >
                <LightModeIcon />
            </ToggleButton>
        </Box>
    )
}
export default Exercise1;