import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "../descarga.png";

export default function ButtonAppBar() {
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={Logo} width="80"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Star Wars
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
