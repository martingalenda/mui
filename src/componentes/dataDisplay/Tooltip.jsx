import {Box, Button, Tooltip, IconButton/* , ClickAwayListener */} from '@mui/material';
/* import {useState} from 'react' */
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const TooltipMUI = () => {

/*     const [open, setOpen] = useState(false);
    
    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    }; */

    return (
        <>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <br/>
{/*           <ClickAwayListener onClickAway={handleTooltipClose}>

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

          </ClickAwayListener> */}
          <br/>
          <br/>
          <Box>
            <Tooltip title={<span><ErrorOutlineIcon/> Left Mid</span>} placement="left" arrow>
              <Button>left</Button>
            </Tooltip>
            <Tooltip title={<span><ErrorOutlineIcon/> Top Start</span>} placement="top-start" arrow>
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title={<span><ErrorOutlineIcon/> Bottom Mid</span>} placement="bottom" arrow>
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title={<span><ErrorOutlineIcon/> Top End</span>} placement="top-end" arrow>
              <Button>top-end</Button>
            </Tooltip>
            <Tooltip title={<span><ErrorOutlineIcon/> Right Mid</span>} placement="right" arrow>
              <Button>right</Button>
            </Tooltip>
          </Box>
          <br/>
        </Box>

        </>
    )
}
 
export default TooltipMUI