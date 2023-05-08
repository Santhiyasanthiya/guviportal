import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Logout} from "../Pages/Logout";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className='image-logo' src="https://infodazz.org/assets/img/logo_infodazz.png" alt="" srcset="" />
          </Typography>
          <Button color="inherit" onClick={Logout}>LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
