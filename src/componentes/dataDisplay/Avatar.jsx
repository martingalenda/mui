import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      width: '1em',
      height: '1em',
      color: '#44b700',
      borderRadius: '30em',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '30em',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const AvatarMUI = () => {
    return (
        /* Si no encuentra la imagen, mostrar la primera letra de la propiedad alt */
        <>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Avatar alt="Remy Sharp" src="/img/avatar.png" />
                <Avatar alt="Hungry Rubbit" src="/img/avatar2.jpeg" />
                <Avatar alt="Cindy Baker" src="/img/avatar3.jpeg" />
                <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/img/avatar1.jpg" sx={{ width: '3em', height: '3em' }} />
      </StyledBadge>
            </Stack>
        </>
    )
}

export default AvatarMUI