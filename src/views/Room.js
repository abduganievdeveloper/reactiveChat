import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from '../MyComponents/Navbar'
import withStyles from '@material-ui/core/styles/withStyles'
import Contacts from '../MyComponents/Contacts'

const styles={
  something:{
    color:"deepskyblue"
  }
}

const Room=(props)=>{
  const { classes } = props;
  return (
    <Grid container>
       
      <Grid item md={3}>
        <Contacts/>
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
    
  
    )
}

export default withStyles(styles)(Room);