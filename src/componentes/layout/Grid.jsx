import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import ButtonBase from '@mui/material/ButtonBase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const GridMUI = () => {
    return (
        <Container sx={{maxWidth: '70%'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                  </Grid>
                </Grid>
            </Box>
            <br/>
            <br/>
            <Paper
                sx={{
                  p: 2,
                  margin: 'auto',
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src="/img/avatar1.jpg" />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                          Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        $19.00
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
            </Paper>
            <br/>
            <br/>
        </Container>
    )
}

export default GridMUI 