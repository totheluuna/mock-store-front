import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Account from './components/account/Account';
import Header from './components/header/Header';
import Copyright from './components/home/Copyright';
import { CssBaseline } from '@material-ui/core';
import Cart from './components/cart/Cart';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Shop from './components/shop/Shop';
import AboutExtended from './components/about/AboutExtended';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
          <Switch>
          console.log(props.history)
            <Route exact path="/mock-store-front/" component={Home}/>
            <Route exact path="/mock-store-front/cart" component={Cart}/>
            <Route exact path="/mock-store-front/account" component={Account}/>
            <Route exact path="/mock-store-front/shop" component={Shop}/>
            <Route exact path="/mock-store-front/about" component={AboutExtended}/>
          </Switch>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </React.Fragment>

  );
}

export default App;