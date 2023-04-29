import { Box } from "@mui/material"

const BoxMUI = () => {
    return (
        <Box sx={{width: '50%', m: 'auto', height: '6em', border: '0.03em solid red', display: 'flex', placeContent: 'center', placeItems: 'center'}}>
            Por defecto Box es un div
        </Box>
    )
}

export default BoxMUI