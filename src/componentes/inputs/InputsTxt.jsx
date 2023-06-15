import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputsTxt = () => {
    return (
        <>
          <br/>
          <br/>
          <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
    <Box sx={{display: 'flex', '& > :not(style)': { m: 1, width: '25ch' }, gap: '1em'}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    <br/>
    <br/>
      <Box sx={{display: 'flex', gap: '2em'}}>
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
    </Box>
        </>
    )
}

export default InputsTxt