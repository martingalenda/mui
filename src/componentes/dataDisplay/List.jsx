import { useState } from 'react';
import {Box} from '@mui/material/';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import WifiIcon from '@mui/icons-material/Wifi';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';


const ListMUI = () => {

    const [checked, setChecked] = useState([1]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };


    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <List dense={true}>
                <ListItem>
                    <ListItemText primary="Item1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Item2" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Item3" />
                </ListItem>
            </List>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <List dense={true}>
                <ListItem>
                    <ListItemIcon sx={{justifyContent: "center"}}>
                    <WifiIcon/>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{justifyContent: "center"}}>
                    <WifiIcon/>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{justifyContent: "center"}}>
                    <WifiIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <List dense={true}>
                <ListItem >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/img/avatar.png" sx={{m:'auto'}} />
                    </ListItemAvatar>
                </ListItem>
                <ListItem >
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/img/avatar.png" sx={{m:'auto'}}/>
                    </ListItemAvatar>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/img/avatar.png" sx={{m:'auto'}}/>
                    </ListItemAvatar>
                </ListItem>
            </List>
        </Box>
        </Box>
        <br/>
        <br/>
        <Box>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', m: 'auto' }}>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/img/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
            );
            })}
            </List>
        </Box>
        </>
    )
}
 
export default ListMUI