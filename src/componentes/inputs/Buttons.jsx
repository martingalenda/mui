import { Button, Box, Typography } from "@mui/material"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from "react-router-dom"; // Enrutado

import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';

import SendIcon from '@mui/icons-material/Send';

const Buttons = () => {
    return (
        <Box sx={{textAlign: 'center'}} component="section">
        <br/>
        <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, m: 5}}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
          <Button variant="contained" disabled>Disabled</Button>
          {/* <Button variant="text">Text</Button> */}
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" disabled>Disabled</Button>
          {/* <Button variant="gradient">Gradient</Button> */} {/* Version custom */}
          <Button variant="outlined" startIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton color="primary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
        </Box>
          <br/>
        <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, m: 5}}>
          <Button color="secondary" variant="contained">Contained</Button>
          <Button color="secondary" variant="contained" startIcon={<SendIcon />}>Send</Button>
          <Button color="secondary" variant="contained" disabled>Disabled</Button>
          {/* <Button variant="text">Text</Button> */}
          <Button color="secondary" variant="outlined">Outlined</Button>
          <Button color="secondary" variant="outlined" disabled>Disabled</Button>
          {/* <Button variant="gradient">Gradient</Button> */} {/* Version custom */}
          <Button color="secondary" variant="outlined" startIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
        </Box>
      
          
          <br/>
          <br/>
          <br/>

          <Box sx={{display: 'flex', justifyContent: 'center', gap: '1em', alignItems: 'center'}}>
                <Typography variant="h3">Floating Action Button</Typography>
                <Link style={{color: '#2e74d7'}} to="https://mui.com/material-ui/react-floating-action-button/" target="_blank" rel="noreferrer">Doc</Link>
            </Box>

          <br/>
          <br/>
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, m: 5}}>
            <Fab color="primary" size="large" aria-label="add">
              <AddIcon />
            </Fab>
            <Fab color="secondary" size="medium" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab color="primary" variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </Box>
        </Box>
    )
}

export default Buttons