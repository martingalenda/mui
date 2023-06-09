import {Alert, AlertTitle, Stack} from '@mui/material';

const AlertMUI = () => {
    return (
        <>
{/*         <Stack sx={{ width: '50%', m: 'auto' }} spacing={2}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert> 
            </Stack>
            <br/>
            <br/>
            <Stack sx={{ width: '50%', m: 'auto', textAlign: 'start' }} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Stack> */}
            <br/>
            <Stack sx={{ width: '50%', m: 'auto' }} spacing={2}>
                <Alert variant="outlined" severity="error">
                  This is an error alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant="outlined" severity="warning">
                  This is a warning alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="warning">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant="outlined" severity="info">
                  This is an info alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="info">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert variant="outlined" severity="success">
                  This is a success alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="success">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
            </Stack>
            <br/>
            <br/>
{/*             <Stack sx={{ width: '50%', m: 'auto' }} spacing={2}>
                <Alert variant="filled" severity="error">
                  This is an error alert — check it out!
                </Alert>
                <Alert variant="filled" severity="warning">
                  This is a warning alert — check it out!
                </Alert>
                <Alert variant="filled" severity="info">
                  This is an info alert — check it out!
                </Alert>
                <Alert variant="filled" severity="success">
                  This is a success alert — check it out!
                </Alert>
            </Stack> */}
        </>
    )
}

export default AlertMUI 