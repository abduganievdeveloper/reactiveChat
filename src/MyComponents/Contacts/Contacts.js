import React from 'react'
import {Grid, Button, MenuList,  Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'
import Contact from './SingleContact.js'

const styles={
  
  }
const Contacts=(props)=>{
    const {classes}=props
    return(
        <Paper>
       <MenuList>
          
             <Contact name="Abdumalik" last="How are you bro ..."/> 
             <Contact name="Abdumalik" last="How are you bro ..."/>   
           
        </MenuList>
        </Paper>
    )
}
export default withStyles(styles)(Contacts)