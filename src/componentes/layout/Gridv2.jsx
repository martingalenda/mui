import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Gridv2 = () => {
    return (
        <Container sx={{maxWidth: '70%'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid xs>
                    <Item>xs</Item>
                  </Grid>
                  <Grid xs={6}>
                    <Item>xs=6</Item>
                  </Grid>
                  <Grid xs>
                    <Item>xs</Item>
                  </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Gridv2