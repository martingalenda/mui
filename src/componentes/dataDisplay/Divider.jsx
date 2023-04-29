import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Container } from '@mui/material';

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));


const DividerMUI = () => {
    const content = (
        <div>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
    )

    return (
        <Container>

            <Root>
                {content}
                <Divider sx={{   "&::before, &::after": {
                                borderColor: "green",
                            },}}>CENTER</Divider>
                {content}
                <Divider textAlign="left">LEFT</Divider>
                {content}
                <Divider textAlign="right">RIGHT</Divider>
                {content}
                <Divider>
                  <Chip label="CHIP" />
                </Divider>
                {content}
            </Root>
            <br/>
            <br/>
            <Grid container>

              <Grid item xs>
                {content}
              </Grid>
              <Divider orientation="vertical" flexItem>
                VERTICAL
              </Divider>
              <Grid item xs>
                {content}
              </Grid>

            </Grid>

        </Container>
    )
}

export default DividerMUI