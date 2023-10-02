import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button ,Link} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {useStyles} from './Style'



const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={classes.appBar}>
      <Toolbar>
        <div style={classes.search}>
          <InputBase placeholder="Search..." />
          <Button><SearchIcon style={classes.searchIcon} /></Button>
        </div>
        <div className={classes.links}>
          <Button  color="inherit" underline="none">
            Brands
          </Button>
          <Button  color="inherit" underline="none">
            Relevance
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
