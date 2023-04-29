import { Link } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
  } from "@mui/material";


const Nav = () => {
    return (
<Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xxxl" sx={{py: '1em' }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Stack direction="row" spacing={2} >
                  <Button component={Link} to="/inputs" variant="text" sx={{color: 'white'}}>Inputs</Button>
                  <Button component={Link} to="/data_display" variant="text" sx={{color: 'white'}}>Data Display</Button>
                  <Button component={Link} to="/feedback" variant="text" sx={{color: 'white'}}>Feedback</Button>
                  <Button component={Link} to="/surfaces" variant="text" sx={{color: 'white'}}>Surfaces</Button>
                  <Button component={Link} to="/navigation" variant="text" sx={{color: 'white'}}>Navigation</Button>
                  <Button component={Link} to="/layout" variant="text" sx={{color: 'white'}}>Layout</Button>         
                  <Button component={Link} to="/utils" variant="text" sx={{color: 'white'}}>Utils</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Nav