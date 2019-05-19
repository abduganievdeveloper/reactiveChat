import React from 'react'
import {Input, Paper, Typography, Grid, Fab, InputLabel} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'

//Style
const styles = theme => ({
    root: {
      marginTop:"30px",
      marginBottom:"40px",
      padding:"5%",
      textAlign:"center",
      width:"70%",
      marginLeft:"auto",
      marginRight:"auto"
    },
    image:{
      maxWidth:"100%"
    },
    secondGrid:{
     
      marginTop:"-20px",
      height:"100%",
      
    },
    firstGrid:{
      marginTop:"20px",
      height:"100%",
    },
    paper:{
      padding:"60px"
    }
    
});

//Component

const Login=(props)=>{
    const { classes } = props;
  
    return (
      <div>
          <Grid container  spacing={40} className={classes.root}>
            <Grid item md={6} className={classes.firstGrid}>
              <Paper elevation={8} className={classes.paper}>
              <Typography component="h1" color="secondary" gutterBottom variant="headline">
                Join Room
              </Typography>
              <img alt="" className={classes.image} src="images/group.jpg"/>
              <InputLabel>Room Number</InputLabel><br/>
              <Input autoFocus/><br/><br/>
              <Link to="/room"><Fab className={classes.button} variant="extended" color="secondary" size="large">Join</Fab></Link>
              </Paper>
            </Grid>

            <Grid item md={6} className={classes.secondGrid}>
              <Paper elevation={2} className={classes.paper}>
              <Typography component="h1" color="primary" gutterBottom variant="headline">
                ... or create new Room
              </Typography>
              <img alt="" className={classes.image} src="images/group.jpg"/>
              
             
              <Fab className={classes.button} variant="extended" color="primary" size="large">Create</Fab>
              </Paper>  
            </Grid>
          </Grid>
          
          
       
      </div>
    );
  }
  

export default withStyles(styles)(Login)