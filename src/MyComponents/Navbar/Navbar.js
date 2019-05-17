import React from 'react'
import {AppBar, Typography} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'


const styles={
    content:{
        padding:"30px",
        marginBottom:"20px",
        backgroundColor:"#45aaf2"
    }

}

const Navbar=(props)=>{
    const {classes}=props;
    return(
        <AppBar className={classes.content} position="sticky" >
            <Typography variant="headline" component="h1" color="inherit">
                Reactive Room Chat
            </Typography>
        </AppBar>
    )
}
export default withStyles(styles)(Navbar);