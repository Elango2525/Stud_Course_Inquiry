import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const settings = ['Profile', 'Admin Login', 'Userboard', 'Logout'];

function Profile() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Redirect to "/" page
    window.location.href = "/login";
  };

  const handleUserboardClick = () => {
    // Redirect to "/" page
    window.location.href = "/";
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Semy Sharp" src="../../../../public/images/profela.webp" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
            {/* Redirect to /dashboard if Adminboard is clicked */}
            {setting === 'Admin Login' ? (
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography textAlign="center">{setting}</Typography>
              </Link>
            ) : setting === 'Userboard' ? (
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography textAlign="center">{setting}</Typography>
              </Link>
            ) : (
              <Typography textAlign="center">{setting}</Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Profile;
