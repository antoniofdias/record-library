import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from '@material-ui/icons';
import { TextField, Button, Grid, makeStyles } from '@material-ui/core';
import logo from '../../logo.svg'

import './styles.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return(
    <header className="navbar">
      {/*https://www.iconfinder.com/icons/2817111/cassete_newyears_party_vinyl_icon*/}
      <Link to='/'>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <img src={logo} className="logo" alt="Home"/>
          </Grid>
          <Grid item>
            <h2>Record Library</h2>
          </Grid>
        </Grid>
      </Link>

      <div id="search-bar">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              style = {{width: 450}}
            />
          </Grid>
          <Grid item>
            <Link>
              <Search />
            </Link>
          </Grid>
        </Grid>
      </div>
      
      <Link to="/cart">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ShoppingCart />}
          >
          Cart
        </Button>
      </Link>
    </header>
  );
}