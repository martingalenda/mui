import {Box } from "@mui/material"

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = () => {
    return (
        <>

            <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', gap: 4, m: 5}}>

                <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, m: 5}}>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />

                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
                </Box>
            </Box>
        </>

    )
}

export default CheckBox