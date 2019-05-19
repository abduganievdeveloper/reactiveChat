import React from 'react'
import {MenuItem, ListItemText} from '@material-ui/core'

const Member=(props)=>{
    const {name, last}=props
    return (
      <MenuItem >          
        <ListItemText inset primary={name}  secondary={last} />
      </MenuItem>
    )
}
export default Member