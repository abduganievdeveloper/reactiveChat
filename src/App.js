import React from 'react';
import './App.css';
import Welcome from './views/Welcome'
import withStyles from '@material-ui/core/styles/withStyles'

const styles={
   main:{
    // backgroundColor:"crimson"
   }
}


const App=(props)=>{
  const {classes}=props
  return (
    <div className={classes.main}>
      <Welcome/>
    </div>
  );
}

export default withStyles(styles)(App);
