import React, {Fragment} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Members from '../MyComponents/Members'
import Messaging from '../MyComponents/Messaging'

const appHeight=window.innerHeight*0.85;
const styles={
  room:{
    height:appHeight
  },
  
  text:{
    height:appHeight
  },
 
}

const Room=(props)=>{
  const { classes } = props;
  return (
    <Grid container className={classes.room}>
      <Grid item md={3} >
       
        
        
      </Grid>
      <Grid item className={classes.text} md={9}> 
        <Messaging/>
      </Grid>
    </Grid>
    
  
    )
}

export default withStyles(styles)(Room);