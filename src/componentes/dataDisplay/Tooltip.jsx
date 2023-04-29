import {Box, Button, Tooltip, IconButton, ClickAwayListener} from '@mui/material';
import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const TooltipMUI = () => {

    const [open, setOpen] = useState(false);
    
    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
        <>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <br/>
          <ClickAwayListener onClickAway={handleTooltipClose}>

              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Add"
                >
                <Button onClick={handleTooltipOpen}> Click Me </Button>
              </Tooltip>

          </ClickAwayListener>
          <br/>
          <br/>
          <Box>
            <Tooltip title="Left Mid" placement="left">
              <Button>left</Button>
            </Tooltip>
            <Tooltip title="Top Start" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Bottom Mid" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title="Top End" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
            <Tooltip title="Right Mid" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Box>
          <br/>
        </Box>

        </>
    )
}
 
export default TooltipMUI