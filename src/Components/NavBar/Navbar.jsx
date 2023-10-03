import React ,{useState} from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button ,Link} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchData } from '../../Store/CarData';
import {useStyles} from './Style'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const classes = useStyles();
  const [search , setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if(search)
      dispatch(searchData(search));
      navigate('/pages/1')
  }


  return (
    <AppBar position="static" style={classes.appBar}>
      <Toolbar>
        <div style={classes.search}>
          <InputBase placeholder="Search..." onChange={(e) => setSearch(e.target.value)}  />
          <Button onClick={handleClick}><SearchIcon style={classes.searchIcon} /></Button>
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
