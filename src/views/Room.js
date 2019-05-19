import React, {Fragment} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Members from '../MyComponents/Members'
import Messaging from '../MyComponents/Messaging'

const appHeight=window.innerHeight>600?window.innerHeight*0.85:700*0.85;

const styles={
  room:{
    height:appHeight
  },
  text:{
    height:appHeight
  },
  leftTop:{
    height:appHeight*0.2,
    padding:appHeight*0.05
  },
  leftBottom:{
    marginTop:appHeight*0.024,
    height:appHeight*0.6
  }
  
}

const Room=(props)=>{
  const { classes } = props;
  return (
    <Grid container className={classes.room}>
      <Grid item md={3} >
        <Paper elevation={3} className={classes.leftTop}>
          <Typography variant="headline" color="primary">Room Number</Typography><hr/>
          <Typography variant="display3" color="secondary">701 010</Typography>
        </Paper>
        <Paper className={classes.leftBottom}>
          <Members/>
        </Paper> 
        
      </Grid>
      <Grid item className={classes.text} md={9}> 
        <Messaging/>
      </Grid>
    </Grid>
    
  
    )
}

export default withStyles(styles)(Room);