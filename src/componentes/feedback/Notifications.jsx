import {useState} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const NotificationsMUI = () => {
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        severity: "info",
      });

      const { vertical, horizontal, open, severity } = state;

      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

      const buttons = (
        <>
          <Button
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'center',
              severity: 'error'
            })}
          >
            Top-Center (Error)
          </Button>
          <Button
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'right',
            })}
          >
            Top-Right (Success)
          </Button>
          <Button
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'right',
              severity: 'info',
            })}
          >
            Bottom-Right (Info)
          </Button>
          <Button
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'center',
              severity: 'warning'
            })}
          >
            Bottom-Center (Warning)
          </Button>
          <Button
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'left',
            })}
          >
            Bottom-Left (Success)
          </Button>
          <Button
            onClick={handleClick({
              vertical: 'top',
              horizontal: 'left',
              severity: 'info',
            })}
          >
            Top-Left (Info)
          </Button>
        </>
      );

    return (
        <>
            {buttons}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              autoHideDuration={2000}
              key={vertical + horizontal}
            >
              <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                This is a success message!
              </Alert>
            </Snackbar>
        </>
    )
}

export default NotificationsMUI 