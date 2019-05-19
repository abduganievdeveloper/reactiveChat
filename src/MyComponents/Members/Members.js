import React from 'react'
import {MenuList , Paper, Typography} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Member from './Member.js'

const styles={
  members:{
    height:'100%',
    overflowY:'scroll'
  },
  title:{
    padding:'20px'
  }
}
const Members=(props)=>{
  const {classes}=props
  return(
    <Paper className={classes.members} elevation={2}>
      <MenuList>
        <Member name="Abdumalik" last="How are you bro ..."/> 
        <Member name="Abdumalik" last="How are you bro ..."/>
        <Member name="Abdumalik" last="How are you bro ..."/> 
        <Member name="Abdumalik" last="How are you bro ..."/>
        <Member name="Abdumalik" last="How are you bro ..."/> 
        <Member name="Abdumalik" last="How are you bro ..."/>   
      </MenuList>
    </Paper>
    )
}
export default withStyles(styles)(Members)