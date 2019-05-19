import React, {Fragment} from 'react';
import {Paper, Input, Fab} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const appHeight=window.innerHeight*0.85;

const styles={
  messagingCont:{
      margin:'10px',
      marginTop:appHeight*0.012,
      marginBottom:appHeight*0.012,
      padding:appHeight*0.1,
      height:appHeight*0.576,
  },
  inputBox:{
    height:appHeight*0.1 ,
    margin:'10px',
    marginTop:appHeight*0.012,
    marginBottom:appHeight*0.012,
    padding:appHeight*0.1,
    paddingTop:appHeight*0.02,
    paddingBottom:appHeight*0.02
  },
  input:{
      width:'80%'

  },
  send:{
      width:'10%',
      marginLeft:'5%',
      marginRight:'5%'
  }

} 

const Messaging=(props)=>{
    const {classes}=props
    return (
      <Fragment>
        <Paper className={classes.messagingCont}>
        
        </Paper>
        <Paper className={classes.inputBox}>
          <Input className={classes.input}/><Fab color="secondary" variant="extended" className={classes.send}>Send</Fab>
        </Paper>
      </Fragment>
    )
} 

export default withStyles(styles)(Messaging)