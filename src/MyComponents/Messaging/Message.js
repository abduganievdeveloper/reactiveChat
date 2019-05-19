import React,{Fragment} from 'react'
import {Paper, Typography, Avatar} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const styles={
  messageBox:{
    padding:"10px",
    backgroundColor:"#007bff",
    width:'60%',
    float:"right",
    marginLeft:'10px',
    marginRight:'10px',
    color:'white'
  },
  line:{
      overflow:'hidden',
      marginTop:'5px'
  },
  avatar:{
    float:'right',
    width:'10%'
  },
  message:{
      fontStyle:"normal",
      fontSize:'110%'
  },
  author:{
    fontStyle:"oblique"   
  }
}

const Message=(props)=>{
    const {classes, message, author}=props
    return(
        <div className={classes.line}>
          <div className={classes.avatar}>

         <Avatar />
        </div>
        <Paper className={classes.messageBox}>
           <Typography color="inherit" component="p" paragraph gutterBottom className={classes.message}>{message}</Typography>
           <Typography component="small" color="inherit" className={classes.author}>{author}</Typography>
        </Paper>
        
        </div>
    )
}

export default withStyles(styles)(Message)