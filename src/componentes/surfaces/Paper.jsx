import {Box, Paper} from '@mui/material'

const PaperMUI = () => {
    return (
        <Box>
            <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  '& > :not(style)': {
                    m: 2,
                    width: 128,
                    height: 128,
                  },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
                <Paper elevation={0} variant="outlined" />
            </Box>

        </Box>
    )
}

export default PaperMUI 